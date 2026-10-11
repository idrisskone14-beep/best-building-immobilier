"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

/**
 * Carte OpenStreetMap chargée uniquement sur demande : aucune requête vers un tiers
 * (ni adresse IP transmise) tant que le visiteur n'a pas choisi d'afficher la carte.
 */
export function MapEmbed({ lat, lng, title, note }: { lat: number; lng: number; title: string; note?: string }) {
  const [loaded, setLoaded] = useState(false);
  const dLng = 0.012;
  const dLat = 0.007;
  const embed = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - dLng}%2C${lat - dLat}%2C${lng + dLng}%2C${lat + dLat}&layer=mapnik&marker=${lat}%2C${lng}`;
  const external = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`;

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone sm:aspect-[16/9]">
        {loaded ? (
          <iframe src={embed} title={title} loading="lazy" referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full border-0" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
            <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full text-navy opacity-[0.12]" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0 160L400 90M0 60L400 190M120 0L170 240M280 0L240 240" />
                <circle cx="210" cy="125" r="46" />
                <circle cx="210" cy="125" r="90" strokeDasharray="3 6" />
              </g>
            </svg>
            <MapPin className="relative text-red" size={34} strokeWidth={1.4} aria-hidden="true" />
            <button type="button" onClick={() => setLoaded(true)} className="btn btn-navy relative">
              Afficher la carte
            </button>
            <p className="relative max-w-sm text-xs text-ink-soft">
              L’affichage charge la carte du service OpenStreetMap, qui peut recevoir votre adresse IP.
            </p>
          </div>
        )}
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-soft">
        <span>{note}</span>
        <a href={external} target="_blank" rel="noopener noreferrer" className="link-arch !text-[0.7rem]">
          Ouvrir sur OpenStreetMap
        </a>
      </div>
    </div>
  );
}
