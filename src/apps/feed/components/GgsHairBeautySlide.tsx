import type { RefObject } from 'react';
import { Sparkles } from 'lucide-react';
import salonPhoto from '@/assets/ggs-feed-29-hair-treatment-retouch.jpg';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsHairBeautySlide.css';

const TREATMENTS = ['Masker rambut', 'Treatment rambut bercabang', 'Treatment ketombe', 'Keratin treatment'];

/** GGS Feed slide 29: hair treatment for self-care — the owner's retouched salon photo in an arch frame with copy on the left. */
export function GgsHairBeautySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="gghb-root"
      aria-label="GGS Beauty — Feed slide 29, hair treatment untuk mempercantik diri"
    >
      <span className="gghb-glow" aria-hidden="true" />

      <section className="gghb-copy">
        <p className="gghb-kicker">Hair Treatment</p>
        <h2 className="gghb-title">
          <span>Percantik</span>
          <span>Diri,</span>
          <em>Mulai dari</em>
          <em>Rambut</em>
        </h2>
        <p className="gghb-sub">Rambut sehat &amp; berkilau bikin tampilan makin segar dan percaya diri.</p>
        <ul className="gghb-list">
          {TREATMENTS.map((name) => (
            <li key={name}>
              <Sparkles className="gghb-icon" aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </section>

      <figure className="gghb-frame">
        <img
          className="gghb-photo"
          src={salonPhoto}
          alt="Stylist GGS Beauty merapikan rambut cokelat bergelombang pelanggan yang tersenyum di kursi salon"
        />
        <figcaption className="gghb-badge">Halus · Berkilau · Sehat</figcaption>
      </figure>

      <img className="gghb-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
