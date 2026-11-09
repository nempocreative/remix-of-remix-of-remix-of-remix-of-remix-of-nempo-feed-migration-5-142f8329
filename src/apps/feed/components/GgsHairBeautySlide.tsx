import type { RefObject } from 'react';
import { Droplets, Scissors, SoapDispenserDroplet, Wind, type LucideIcon } from 'lucide-react';
import salonBackdrop from '@/assets/ggs-feed-29-salon-backdrop.jpg';
import salonPeople from '@/assets/ggs-feed-29-people-original.png';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsHairBeautySlide.css';

const TREATMENTS: { name: string; Icon: LucideIcon }[] = [
  { name: 'Masker rambut', Icon: SoapDispenserDroplet },
  { name: 'Treatment rambut bercabang', Icon: Scissors },
  { name: 'Treatment ketombe', Icon: Droplets },
  { name: 'Keratin treatment', Icon: Wind },
];

/** GGS Feed slide 29: hair treatment for self-care — the owner's original stylist + client (unchanged pixels) cut out onto an AI salon backdrop, no frames or shapes. */
export function GgsHairBeautySlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="gghb-root"
      aria-label="GGS Beauty — Feed slide 29, hair treatment untuk mempercantik diri"
    >
      <img className="gghb-backdrop" src={salonBackdrop} alt="" aria-hidden="true" />
      <span className="gghb-shade" aria-hidden="true" />

      <img
        className="gghb-people"
        src={salonPeople}
        alt="Stylist GGS Beauty merapikan rambut cokelat bergelombang pelanggan yang tersenyum"
      />

      <section className="gghb-copy">
        <p className="gghb-kicker">Hair Treatment</p>
        <h2 className="gghb-title">
          <span>Percantik</span>
          <span>Diri,</span>
          <em>Mulai dari</em>
          <em>Rambut</em>
        </h2>
        <p className="gghb-sub">Rambut sehat &amp; berkilau bikin kamu tampil segar dan makin percaya diri.</p>
        <ul className="gghb-list">
          {TREATMENTS.map(({ name, Icon }) => (
            <li key={name}>
              <Icon className="gghb-icon" aria-hidden="true" strokeWidth={1.8} />
              {name}
            </li>
          ))}
        </ul>
        <p className="gghb-tags">Halus · Berkilau · Sehat</p>
      </section>

      <img className="gghb-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
