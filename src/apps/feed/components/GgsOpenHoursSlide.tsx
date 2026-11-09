import type { RefObject } from 'react';
import salonPoster from '@/assets/ggs-open-hours-nail-coaster-poster.jpg.asset.json';
import salonVideo from '@/assets/ggs-open-hours-nail-coaster.mp4.asset.json';
import ggsWatermark from '@/assets/ggs-header-footer-v2.png.asset.json';
import './GgsOpenHoursSlide.css';

/** GGS Feed slide 23: looping nail-art hand footage with the opening hours and v2 branding. */
export function GgsOpenHoursSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <div
      ref={exportRef as RefObject<HTMLDivElement | null>}
      className="ggh-root"
      aria-label="GGS Beauty — We are open, setiap hari jam 09.00 sampai 21.00"
    >
      <video
        className="ggh-photo"
        src={salonVideo.url}
        poster={salonPoster.url}
        aria-label="Tangan dengan nail art cokelat-emas memegang coaster GGS Studio Beauty"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="ggh-fade" />
      <section className="ggh-copy">
        <p className="ggh-kicker">Jam Operasional</p>
        <h2 className="ggh-title">
          We are open <em>setiap hari</em>
        </h2>
        <p className="ggh-hours">
          <span>09.00</span>
          <em>&ndash;</em>
          <span>21.00</span>
        </p>
        <p className="ggh-days">Walk-in &amp; booking welcome</p>
      </section>
      <img className="ggh-watermark" src={ggsWatermark.url} alt="" aria-hidden="true" />
    </div>
  );
}
