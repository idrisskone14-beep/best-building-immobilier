/**
 * Tracé de plan d'architecte par-dessus la photographie : repères de cadrage, ligne de sol,
 * niveaux et cotation verticale d'un duplex (niveau 0 / niveau 1). CSS pur, masqué sur mobile.
 */
export function HeroBlueprint() {
  const d = (s: number) => ({ ["--d" as string]: `${s}s` });
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full md:block"
    >
      <g fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="1.2">
        {/* repères de cadrage */}
        <path pathLength="1" className="draw" style={d(1.1)} d="M48 130V92H86" />
        <path pathLength="1" className="draw" style={d(1.2)} d="M1354 92H1392V130" />
        <path pathLength="1" className="draw" style={d(1.3)} d="M48 832V870H86" />
        <path pathLength="1" className="draw" style={d(1.4)} d="M1354 870H1392V832" />
        {/* ligne de sol et niveau 1 */}
        <path pathLength="1" className="draw" style={d(1.6)} d="M48 836H1392" />
        <path pathLength="1" className="draw" style={{ ...d(1.9), strokeDasharray: "4 9", strokeOpacity: 0.35 }} d="M880 520H1392" />
        {/* cotation verticale */}
        <path pathLength="1" className="draw" style={d(2.1)} d="M1384 300V836" />
        <path pathLength="1" className="draw" style={d(2.4)} d="M1370 300H1398M1370 520H1398M1370 836H1398" />
        <path pathLength="1" className="draw" style={d(2.5)} d="M1384 300l-5 10h10zM1384 836l-5 -10h10z" />
      </g>
      <g fill="#fff" fillOpacity="0.8" fontSize="12" letterSpacing="3" fontFamily="var(--font-instrument), sans-serif" textAnchor="end">
        <text className="draw-fade" style={d(3)} x="1362" y="512">NIVEAU 1</text>
        <text className="draw-fade" style={d(3.2)} x="1362" y="828">NIVEAU 0</text>
      </g>
    </svg>
  );
}
