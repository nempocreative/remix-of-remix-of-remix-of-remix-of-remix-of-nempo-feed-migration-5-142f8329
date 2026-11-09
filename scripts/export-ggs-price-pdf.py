"""Prebuild the current GGS A4 menu (Python playwright, requests, fonttools).

Run against the running preview: python3 scripts/export-ggs-price-pdf.py
No page screenshots are used: Chromium prints vector text with static embedded
fonts. Temporary fonts and QA files stay outside the project.
"""
import asyncio
import base64
import io
import re
from pathlib import Path

import requests
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public/ggs-price-list/GGS-Price-List-A4-v2.pdf'


def font_face(family, weight, italic=False):
    query = family.replace(' ', '+')
    axis = f'ital,wght@1,{weight}' if italic else f'wght@{weight}'
    response = requests.get(
        f'https://fonts.googleapis.com/css2?family={query}:{axis}', timeout=30)
    response.raise_for_status()
    urls = re.findall(r'url\((https://[^)]+)\)', response.text)
    if not urls:
        raise RuntimeError(f'Font unavailable: {family}')
    response = requests.get(urls[-1], timeout=30)
    response.raise_for_status()
    font = TTFont(io.BytesIO(response.content))
    if 'fvar' in font:
        axes = {a.axisTag: (weight if a.axisTag == 'wght' else a.defaultValue)
                for a in font['fvar'].axes}
        font = instantiateVariableFont(font, axes, inplace=True)
    font.flavor = None
    buffer = io.BytesIO()
    font.save(buffer)
    data = base64.b64encode(buffer.getvalue()).decode()
    style = 'italic' if italic else 'normal'
    return (f'@font-face{{font-family:"Print {family}";font-style:{style};'
            f'font-weight:{weight};src:url(data:font/ttf;base64,{data}) format("truetype");}}')


async def main():
    faces = ''.join(font_face(*args) for args in [
        ('Jost', 400), ('Jost', 500), ('Jost', 400, True),
        ('Playfair Display', 700), ('Playfair Display', 500, True),
        ('Archivo Black', 400), ('Outfit', 700),
    ])
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 1800})
        await page.goto('http://localhost:8080/ggs-price-list', wait_until='networkidle')
        await page.locator('.ggpr-page').first.wait_for()
        await page.emulate_media(media='print')
        await page.add_style_tag(content=faces + '''
          .ggpr-root {font-family: "Print Jost", sans-serif;}
          .ggpr-title,.ggpr-subtitle,.ggpr-tagline strong,.ggpr-tagline em
            {font-family: "Print Playfair Display", serif;}
          .ggpr-label {font-family: "Print Archivo Black", sans-serif;}
          .ggpr-footer-text {font-family: "Print Outfit", sans-serif;}
          /* pdf() runs with screen styles (see note below), so force the
             print layout unconditionally: only the A4 sheet, full bleed. */
          .ggpr-toolbar,.ggpr-page-no {display: none !important;}
          html,body,.ggpr-root {background: none !important;}
          .ggpr-root {min-height: 0 !important;}
          .ggpr-pages {display: block !important; padding: 0 !important;}
          /* Whole-pixel sheet matching the PDF paper exactly, one per page,
             so no white strip builds up at the bottom or right edge. */
          @page {size: A4; margin: 0;}
          .ggpr-page-wrap {width: 100vw !important; margin: 0 !important;
                           padding: 0 !important; break-after: page !important;}
          .ggpr-page-wrap:last-child {break-after: auto !important;}
          .ggpr-page {width: 100vw !important; height: 100vh !important; overflow: hidden !important;
                      aspect-ratio: auto !important; box-shadow: none !important;}
        ''')
        await page.evaluate('''async () => {
          await document.fonts.ready;
          await Promise.all([...document.images].map(img => img.decode()));
          // Recalculate the shared fit after the print fonts and A4 width settle.
          const root = document.querySelector('.ggpr-pages');
          const rows = [...root.querySelectorAll('.ggpr-row')];
          let fit = 1;
          root.style.setProperty('--fit', fit);
          while(fit > .6 && rows.some(r => r.scrollWidth > r.clientWidth + 1)) {
            fit -= .02; root.style.setProperty('--fit', fit.toFixed(2));
          }
          await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        }''')
        count = await page.locator('.ggpr-page').count()
        # Chromium 147 gets stuck when pdf() runs while print media is still
        # emulated (outputs blank A5 landscape pages). Switching back to screen
        # first makes pdf() apply the print stylesheet correctly.
        await page.emulate_media(media='screen')
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        await page.pdf(path=str(OUTPUT), format='A4', print_background=True, prefer_css_page_size=True, margin={k: '0' for k in ['top','bottom','left','right']})
        print(f'Exported {count} pages to {OUTPUT.relative_to(ROOT)}')
        await browser.close()


if __name__ == '__main__':
    asyncio.run(main())