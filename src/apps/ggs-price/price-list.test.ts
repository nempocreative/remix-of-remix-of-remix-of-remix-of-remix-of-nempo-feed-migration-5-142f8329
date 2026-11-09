import { describe, expect, it } from 'vitest';
import { GGS_PRICE_CONTACT, GGS_PRICE_PAGES, findGgsPrice } from './price-list';

describe('GGS A4 price list', () => {
  it('has the eight pages of the printed menu', () => {
    expect(GGS_PRICE_PAGES).toHaveLength(8);
  });

  it('keeps nail art prices from the owner file', () => {
    expect(findGgsPrice('Press On Nail')).toBe('50.000 - 100.000');
    expect(findGgsPrice('Kuku palsu fullcateye + Chrome')).toBe('250.000');
    expect(findGgsPrice('Remover nail')).toBe('25.000');
  });

  it('keeps hair prices from the owner file', () => {
    expect(findGgsPrice('Cuci rambut')).toBe('25.000');
    expect(findGgsPrice('Potong cuci curly')).toBe('90.000');
    expect(findGgsPrice('Potong cuci catok')).toBe('85.000');
    expect(findGgsPrice('Potong cuci blow')).toBe('85.000');
    expect(findGgsPrice('Catok rambut sambung')).toBe('50.000');
    expect(findGgsPrice('Curly rambut sambung')).toBe('55.000');
    expect(findGgsPrice('Creambath L’Oréal warna')).toBe('175.000');
    expect(findGgsPrice('Treatment kutu dewasa')).toBe('175.000');
  });

  it('lists the kids treatment prices the owner asked for', () => {
    const page = GGS_PRICE_PAGES.find((p) => p.id === 'kids-treatment')!;
    expect(page.sections[0].title).toBe('KHUSUS TREATMENT ANAK');
    expect(page.sections[0].items).toEqual([
      { name: 'Potong rambut', price: '70.000' },
      { name: 'Nail art', price: '35.000' },
      { name: 'Creambath', price: '80.000' },
      { name: 'Treatment kutu (1-5 tahun)', price: '120.000' },
    ]);
  });

  it('keeps colouring bleaching ranges separate from no bleaching', () => {
    const page = GGS_PRICE_PAGES.find((p) => p.id === 'colouring-creambath')!;
    expect(page.sections[0].items[2].price).toBe('350.000 - 600.000');
    expect(page.sections[1].items[2].price).toBe('550.000 - 800.000');
  });

  it('keeps massage and bundling prices from the owner file', () => {
    expect(findGgsPrice('Pijat urut tradisional khusus pria')).toBe('Start 100K');
    expect(findGgsPrice('MeniPedi')).toBe('120.000');
    expect(findGgsPrice('Body massage + reflexy + kerok')).toBe('195.000');
  });

  it('lists the body treatment prices the owner asked for', () => {
    const page = GGS_PRICE_PAGES.find((p) => p.id === 'body-treatment')!;
    expect(page.sections[0].title).toBe('BODY TREATMENT');
    const prices = Object.fromEntries(page.sections[0].items.map((i) => [i.name, i.price]));
    expect(prices['Waxing tangan']).toBe('85.000');
    expect(prices['Waxing kaki']).toBe('130.000');
    expect(prices['Waxing tangan + kaki']).toBe('190.000');
    expect(prices['Waxing ketiak + tangan + kaki']).toBe('230.000');
    expect(prices['Bekam full body']).toBe('140.000');
    expect(prices['Bekam punggung']).toBe('75.000');
    expect(prices['Bekam tangan']).toBe('50.000');
    expect(prices['Bekam kaki']).toBe('50.000');
    expect(prices['Lulur scrub badan']).toBe('80.000');
    expect(prices['Masker badan']).toBe('60.000');
    expect(prices['Lulur + masker']).toBe('120.000');
  });

  it('adds body massage + bekam to the bundling package', () => {
    expect(findGgsPrice('Body massage + bekam')).toBe('170.000');
  });

  it('prints the salon contact', () => {
    expect(GGS_PRICE_CONTACT.whatsapp).toBe('0823-4277-7723');
    expect(GGS_PRICE_CONTACT.instagram).toBe('@ggsbeauty.hair.co');
  });
});
