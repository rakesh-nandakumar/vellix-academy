"use client";
import { useEffect, useRef } from "react";

/* ----------------------------- Limb parts ----------------------------- */

function Leg({ delay = "0s", dim = false }) {
  return (
    <g style={dim ? { filter: "brightness(.7)" } : undefined}>
      <g className="hd-thigh" style={{ animationDelay: delay }}>
        {/* rear cable + front actuator */}
        <path d="M73 118 Q70 130 73 143" stroke="#0b0f14" strokeWidth="1.6" fill="none" />
        <rect x="84.6" y="119" width="3.4" height="24" rx="1.2" fill="url(#hdGraph)" />
        <rect x="85.5" y="124" width="1.6" height="14" fill="url(#hdSteel)" />
        {/* thigh shell */}
        <path d="M72.5 114 Q71.5 130 74 143 H86 Q88.5 130 87.5 114 Z" fill="url(#hdShell)" />
        <path d="M72.5 114 Q71.5 130 74 143 H86 Q88.5 130 87.5 114 Z" fill="url(#hdShade)" />
        <path d="M72 125 H88" stroke="#6b7686" strokeWidth=".6" />
        <path d="M73.2 134 H87" stroke="#6b7686" strokeWidth=".5" opacity=".7" />
        <path d="M75 116 Q74 130 76 141" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity=".7" />
        <rect x="78" y="128" width="5" height="1.3" rx=".65" fill="#fb923c" filter="url(#hdGlow)" />
        {/* hip joint */}
        <circle cx="80" cy="112" r="8" fill="url(#hdGraph)" />
        <circle cx="80" cy="112" r="5.6" fill="none" stroke="url(#hdSteel)" strokeWidth="1.2" />
        <circle cx="80" cy="112" r="2.4" fill="#0b0f14" />
        <circle cx="80" cy="112" r=".9" fill="#94a3b8" />

        <g className="hd-shin" style={{ animationDelay: delay }}>
          {/* knee joint */}
          <circle cx="80" cy="144" r="6.6" fill="url(#hdGraph)" />
          <circle cx="80" cy="144" r="4.4" fill="none" stroke="url(#hdSteel)" strokeWidth="1" />
          <circle cx="80" cy="144" r="1.6" fill="#0b0f14" />
          {/* calf actuator (rear) */}
          <path d="M75 152 Q68.5 162 73.5 173 L77 173 L77 152 Z" fill="url(#hdGraph)" />
          <path d="M73 158 Q71 164 74 169" stroke="#64748b" strokeWidth=".7" fill="none" />
          {/* kneecap shell */}
          <path d="M74.5 140 Q80 136.5 85.5 140 L85 149 H75 Z" fill="url(#hdShell)" />
          <path d="M74.5 140 Q80 136.5 85.5 140 L85 149 H75 Z" fill="url(#hdShade)" />
          {/* shin shell */}
          <path d="M75 150 Q73.5 162 76 177 H85 Q87.5 162 85.5 150 Z" fill="url(#hdShell)" />
          <path d="M75 150 Q73.5 162 76 177 H85 Q87.5 162 85.5 150 Z" fill="url(#hdShade)" />
          <path d="M77 152 Q76 164 78 175" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity=".7" />
          <path d="M75.4 160 H85.6 M75.8 169 H85.4" stroke="#6b7686" strokeWidth=".6" />
          <rect x="79.5" y="154" width="4.5" height="1.2" rx=".6" fill="#fb923c" filter="url(#hdGlow)" />
          {/* ankle + shoe */}
          <circle cx="80.5" cy="177" r="4.4" fill="url(#hdGraph)" />
          <circle cx="80.5" cy="177" r="1.6" fill="#64748b" />
          <path d="M70 180 H88 Q96 180.5 100 185.5 V188.5 H68 V183 Q68 180 70 180 Z" fill="url(#hdGraph)" />
          <path d="M72 180.4 H88 Q93.5 181 96.5 184.4 H72 Z" fill="url(#hdShell)" />
          <path d="M72 180.4 H88 Q93.5 181 96.5 184.4 H72 Z" fill="url(#hdShade)" />
          <rect x="67.5" y="186.3" width="33" height="2.8" rx="1.2" fill="#06090d" />
          <rect x="70" y="184.6" width="20" height="1" rx=".5" fill="#fb923c" opacity=".9" filter="url(#hdGlow)" />
        </g>
      </g>
    </g>
  );
}

function Arm({ delay = "0s", dim = false, pad = false }) {
  return (
    <g style={dim ? { filter: "brightness(.7)" } : undefined}>
      <g className="hd-uarm" style={{ animationDelay: delay }}>
        {/* upper arm */}
        <path d="M75.5 72 Q74.6 82 76 90 H84 Q85.4 82 84.5 72 Z" fill="url(#hdShell)" />
        <path d="M75.5 72 Q74.6 82 76 90 H84 Q85.4 82 84.5 72 Z" fill="url(#hdShade)" />
        <rect x="75.2" y="79" width="9.6" height="3.4" fill="url(#hdGraph)" />
        <path d="M77.4 74 Q77 82 78 88" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".7" />
        {/* shoulder joint */}
        <circle cx="80" cy="70" r="7.4" fill="url(#hdGraph)" />
        <circle cx="80" cy="70" r="5" fill="none" stroke="url(#hdSteel)" strokeWidth="1" />
        <circle cx="80" cy="70" r="1.8" fill="#0b0f14" />
        {pad && (
          <>
            <path d="M72 71 Q71.5 62.5 80 62 Q88.5 62.5 88 71 L86 76 H74 Z" fill="url(#hdShell)" />
            <path d="M72 71 Q71.5 62.5 80 62 Q88.5 62.5 88 71 L86 76 H74 Z" fill="url(#hdShade)" />
            <path d="M74.5 66 Q80 62.8 86 66" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity=".8" />
            <path d="M73 72.5 H87" stroke="#6b7686" strokeWidth=".6" />
          </>
        )}
        <g className="hd-farm" style={{ animationDelay: delay }}>
          {/* elbow */}
          <circle cx="80" cy="91" r="5.2" fill="url(#hdGraph)" />
          <circle cx="80" cy="91" r="3.2" fill="none" stroke="url(#hdSteel)" strokeWidth=".9" />
          {/* forearm */}
          <path d="M75.4 93 Q74.4 103 76.4 113 H83.6 Q85.6 103 84.6 93 Z" fill="url(#hdShell)" />
          <path d="M75.4 93 Q74.4 103 76.4 113 H83.6 Q85.6 103 84.6 93 Z" fill="url(#hdShade)" />
          <rect x="75" y="101" width="10" height="3" fill="url(#hdGraph)" />
          <path d="M77.2 95 Q76.6 104 77.8 111" stroke="#fff" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity=".7" />
          <rect x="79.5" y="96" width="3.6" height="1.1" rx=".55" fill="#fb923c" filter="url(#hdGlow)" />
          {/* wrist + hand */}
          <rect x="75.8" y="112" width="8.4" height="3" rx="1" fill="url(#hdGraph)" />
          <path d="M76 115 H84.6 Q86 115 86 117 V121.5 Q86 124 83.5 124 H77 Q75 124 75 121.5 V117 Q75 115 76 115 Z" fill="url(#hdGraph)" />
          <path d="M77.4 116 V123 M79.8 116 V123 M82.2 116 V123" stroke="#475569" strokeWidth=".6" />
          <path d="M75.8 116.6 Q74 118.5 75.6 121" stroke="#334155" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>
      </g>
    </g>
  );
}

/* ------------------------------- Robot -------------------------------- */

function Robot() {
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full" style={{ overflow: "visible" }}>
      <defs>
        {/* matte white composite shell */}
        <linearGradient id="hdShell" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#aeb8c6" />
          <stop offset=".25" stopColor="#f3f5f8" />
          <stop offset=".6" stopColor="#d9dfe7" />
          <stop offset="1" stopColor="#707b8d" />
        </linearGradient>
        <linearGradient id="hdShellV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6f8fa" />
          <stop offset=".6" stopColor="#d6dce5" />
          <stop offset="1" stopColor="#8a95a7" />
        </linearGradient>
        {/* ambient-occlusion shade overlay */}
        <linearGradient id="hdShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#000" stopOpacity=".05" />
          <stop offset=".55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".22" />
        </linearGradient>
        <linearGradient id="hdGraph" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4b5563" />
          <stop offset=".4" stopColor="#222831" />
          <stop offset="1" stopColor="#0a0d12" />
        </linearGradient>
        <linearGradient id="hdSteel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e5e9ef" />
          <stop offset=".45" stopColor="#8b95a5" />
          <stop offset="1" stopColor="#3b4350" />
        </linearGradient>
        <linearGradient id="hdAcc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fdba74" />
          <stop offset=".5" stopColor="#f97316" />
          <stop offset="1" stopColor="#c2410c" />
        </linearGradient>
        <radialGradient id="hdHead" cx=".3" cy=".2" r=".95">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".5" stopColor="#e3e8ef" />
          <stop offset="1" stopColor="#7f8b9e" />
        </radialGradient>
        <linearGradient id="hdVisor" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c2a3d" />
          <stop offset=".4" stopColor="#0a0f18" />
          <stop offset="1" stopColor="#020409" />
        </linearGradient>
        <linearGradient id="hdGlass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#bcd4ff" stopOpacity=".45" />
          <stop offset=".4" stopColor="#fff" stopOpacity=".05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hdCore">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".35" stopColor="#fed7aa" />
          <stop offset=".7" stopColor="#f97316" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hdFlame" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".25" stopColor="#bfdbfe" />
          <stop offset=".5" stopColor="#fdba74" />
          <stop offset=".8" stopColor="#f97316" stopOpacity=".6" />
          <stop offset="1" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <filter id="hdGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hdDrop" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.6" floodColor="#431407" floodOpacity=".35" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="80" cy="190" rx="30" ry="3.6" fill="#431407" opacity=".22" className="hd-shadow" />

      <g className="hd-bob" filter="url(#hdDrop)">
        {/* back leg */}
        <Leg delay="-0.35s" dim />

        {/* upper body leans forward */}
        <g transform="rotate(9 80 112)">
          {/* back arm */}
          <Arm dim />

          {/* thruster backpack */}
          <rect x="50" y="62" width="15" height="32" rx="3" fill="url(#hdGraph)" />
          <rect x="52" y="65" width="2" height="26" fill="#fff" opacity=".1" />
          {[68, 73, 78, 83, 88].map((y) => (
            <line key={y} x1="50.5" y1={y} x2="64.5" y2={y} stroke="#475569" strokeWidth=".7" />
          ))}
          <rect x="56" y="76" width="7" height="1.2" fill="#fb923c" filter="url(#hdGlow)" />
          {/* nozzles */}
          <path d="M50 66 L45 64.5 V77.5 L50 76 Z" fill="url(#hdGraph)" />
          <path d="M50 82 L45 80.5 V93.5 L50 92 Z" fill="url(#hdGraph)" />
          <path d="M45 64.5 V77.5" stroke="url(#hdSteel)" strokeWidth="1.2" />
          <path d="M45 80.5 V93.5" stroke="url(#hdSteel)" strokeWidth="1.2" />
          {/* flames */}
          <g
            id="hdFlameGroup"
            style={{ transformOrigin: "46px 79px", transform: "scaleX(.3)", opacity: 0.2 }}
          >
            <g className="hd-flicker">
              <path d="M45 66.5 Q4 71 45 75.5 Z" fill="url(#hdFlame)" />
              <path d="M45 82.5 Q4 87 45 91.5 Z" fill="url(#hdFlame)" />
              <path d="M45 68.6 Q24 71 45 73.4 Z" fill="#fff" opacity=".9" />
              <path d="M45 84.6 Q24 87 45 89.4 Z" fill="#fff" opacity=".9" />
            </g>
          </g>

          {/* neck */}
          <rect x="77" y="49" width="10" height="12" rx="2" fill="url(#hdGraph)" />
          {[52, 55, 58].map((y) => (
            <line key={y} x1="77.5" y1={y} x2="86.5" y2={y} stroke="#64748b" strokeWidth=".7" />
          ))}

          {/* pelvis + abdomen */}
          <path d="M63 106 H97 Q99 106 98.5 112 Q97 118 92 118 H68 Q63 118 61.5 112 Q61 106 63 106 Z" fill="url(#hdGraph)" />
          <path d="M64 107 H96 L97 111 H63 Z" fill="url(#hdShell)" />
          <path d="M64 107 H96 L97 111 H63 Z" fill="url(#hdShade)" />
          <rect x="78" y="112" width="5" height="1.2" rx=".6" fill="#fb923c" filter="url(#hdGlow)" />
          <rect x="68" y="94" width="26" height="13" rx="3" fill="#0b0f14" />
          {[96, 98.8, 101.6, 104.4].map((y) => (
            <rect key={y} x="69.5" y={y} width="23" height="1.6" rx=".8" fill="url(#hdSteel)" opacity=".75" />
          ))}

          {/* chest shell */}
          <path
            d="M62 69 Q62 59.5 71 58.5 H91 Q100 59.5 101 69 L97 93 Q95 98 89 98 H71 Q65 98 63 93 Z"
            fill="url(#hdShellV)"
          />
          <path
            d="M62 69 Q62 59.5 71 58.5 H91 Q100 59.5 101 69 L97 93 Q95 98 89 98 H71 Q65 98 63 93 Z"
            fill="url(#hdShade)"
          />
          {/* trapezius / collar */}
          <path d="M69 58.6 Q80.5 53.5 93 58.6 L90.5 63 H71.5 Z" fill="url(#hdGraph)" />
          {/* panel seams */}
          <path d="M81.5 63 V84" stroke="#6b7686" strokeWidth=".6" />
          <path d="M63.5 84 Q81 88 99 84" stroke="#6b7686" strokeWidth=".7" fill="none" />
          <path d="M64 75 Q66 66 72 64" stroke="#6b7686" strokeWidth=".6" fill="none" />
          <path d="M66 62 Q72 60 90 60" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".85" />
          {/* light bar + sensor core */}
          <rect x="70" y="69" width="9" height="1.5" rx=".75" fill="#fb923c" filter="url(#hdGlow)" />
          <rect x="84" y="69" width="9" height="1.5" rx=".75" fill="#fb923c" filter="url(#hdGlow)" />
          <circle cx="81.5" cy="76" r="6" fill="url(#hdGraph)" />
          <circle cx="81.5" cy="76" r="6" fill="none" stroke="url(#hdSteel)" strokeWidth="1" />
          <circle cx="81.5" cy="76" r="3.6" fill="url(#hdCore)" filter="url(#hdGlow)" className="hd-pulse" />
          {/* ribs vents */}
          {[88, 90.6, 93.2].map((y) => (
            <line key={y} x1="88" y1={y} x2="96" y2={y - 0.4} stroke="#6b7686" strokeWidth=".8" />
          ))}

          {/* head shell */}
          <path
            d="M66 36 Q65 18 82 15 Q100 13 107 28 Q110 42 103 50 Q99 54 92 54 H76 Q67 52 66 36 Z"
            fill="url(#hdHead)"
          />
          <path
            d="M66 36 Q65 18 82 15 Q100 13 107 28 Q110 42 103 50 Q99 54 92 54 H76 Q67 52 66 36 Z"
            fill="url(#hdShade)"
          />
          <path d="M70 24 Q84 13.5 100 20" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" opacity=".8" />
          <path d="M72 20 Q76 36 76 50" stroke="#6b7686" strokeWidth=".6" fill="none" />
          <path d="M70 31 H77" stroke="#6b7686" strokeWidth=".6" />
          {/* ear module */}
          <rect x="65" y="30" width="7" height="12" rx="2.5" fill="url(#hdGraph)" />
          <rect x="66.6" y="34" width="3.8" height="1.4" rx=".7" fill="#fb923c" filter="url(#hdGlow)" />
          {/* visor */}
          <path d="M77.5 26 Q96 22 106 30 Q108.5 38 102 44 Q91 46.5 80 44 Q75 38 77.5 26 Z" fill="#05080d" />
          <path d="M79 27.4 Q96 24 104.6 31 Q106.6 37.6 101 42.6 Q91 44.8 81 42.8 Q77 37.6 79 27.4 Z" fill="url(#hdVisor)" />
          <path d="M79 27.4 Q96 24 104.6 31 Q106.6 37.6 101 42.6 Q91 44.8 81 42.8 Q77 37.6 79 27.4 Z" fill="none" stroke="url(#hdSteel)" strokeWidth=".7" opacity=".8" />
          {/* eye slit */}
          <rect x="86" y="33.6" width="17" height="3.4" rx="1.7" fill="#fdba74" filter="url(#hdGlow)" className="hd-blink" />
          <rect x="89" y="34.4" width="11" height="1.2" rx=".6" fill="#fff" className="hd-blink" />
          {/* glass reflections */}
          <path d="M80 29 Q95 25 104 31 Q92 29.4 82 38 Z" fill="url(#hdGlass)" />
          <rect x="80" y="28" width="2.4" height="14" rx="1.2" fill="#fff" opacity=".3" className="hd-scan" />

          {/* front arm */}
          <Arm delay="-0.35s" pad />
        </g>

        {/* front leg */}
        <Leg delay="0s" />
      </g>

      <style>{`
        .hd-thigh { transform-origin: 80px 112px; animation: hdThigh .7s ease-in-out infinite; }
        .hd-shin  { transform-origin: 80px 144px; animation: hdShin .7s ease-in-out infinite; }
        .hd-uarm  { transform-origin: 80px 70px;  animation: hdUArm .7s ease-in-out infinite; }
        .hd-farm  { transform-origin: 80px 91px;  animation: hdFArm .7s ease-in-out infinite; }
        .hd-bob   { animation: hdBob .35s ease-in-out infinite; }
        .hd-shadow { transform-box: fill-box; transform-origin: center; animation: hdShadow .35s ease-in-out infinite; }
        .hd-pulse { transform-box: fill-box; transform-origin: center; animation: hdPulse 1.2s ease-in-out infinite; }
        .hd-blink { transform-box: fill-box; transform-origin: center; animation: hdBlink 2.6s ease-in-out infinite; }
        .hd-scan  { animation: hdScan 1.6s linear infinite; }
        .hd-flicker { transform-origin: 46px 79px; animation: hdFlicker .12s ease-in-out infinite alternate; }

        @keyframes hdThigh { 0%,100% { transform: rotate(-42deg); } 50% { transform: rotate(32deg); } }
        @keyframes hdShin  { 0% { transform: rotate(8deg); } 25% { transform: rotate(16deg); } 50% { transform: rotate(55deg); } 75% { transform: rotate(100deg); } 100% { transform: rotate(8deg); } }
        @keyframes hdUArm  { 0%,100% { transform: rotate(34deg); } 50% { transform: rotate(-46deg); } }
        @keyframes hdFArm  { 0%,100% { transform: rotate(-65deg); } 50% { transform: rotate(-105deg); } }
        @keyframes hdBob   { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3.5px); } }
        @keyframes hdShadow { 0%,100% { transform: scaleX(1); opacity: .22; } 50% { transform: scaleX(.82); opacity: .1; } }
        @keyframes hdPulse { 0%,100% { transform: scale(.9); opacity: .85; } 50% { transform: scale(1.1); opacity: 1; } }
        @keyframes hdBlink { 0%,92%,100% { transform: scaleY(1); } 96% { transform: scaleY(.1); } }
        @keyframes hdScan  { 0% { transform: translateX(0); opacity: 0; } 15% { opacity: .35; } 85% { opacity: .35; } 100% { transform: translateX(24px); opacity: 0; } }
        @keyframes hdFlicker { from { transform: scaleY(.8); } to { transform: scaleY(1.12); } }

        @media (prefers-reduced-motion: reduce) {
          .hd-thigh,.hd-shin,.hd-uarm,.hd-farm,.hd-bob,.hd-shadow,
          .hd-pulse,.hd-blink,.hd-scan,.hd-flicker { animation: none; }
        }
      `}</style>
    </svg>
  );
}

/* ------------------------------ Run track ----------------------------- */

const GROUND = 22; // px from bottom of track to the ground line

export default function AIRobotRun({ size = 128, className = "" }) {
  const trackRef = useRef(null);
  const robotRef = useRef(null);
  const trailRef = useRef(null);
  const meterRef = useRef(null);

  const robotW = size * 0.8;

  useEffect(() => {
    const track = trackRef.current;
    const robot = robotRef.current;
    if (!track || !robot) return;

    const flame = robot.querySelector("#hdFlameGroup");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      robot.style.transform = `translate3d(${track.clientWidth / 2 - robotW / 2}px,0,0)`;
      return;
    }

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(track);

    const RUN = 7500; // ms from left edge to right edge
    const GAP = 800; // pause off-screen before looping
    const MIN_RATE = 0.5; // limb speed at the start
    const MAX_RATE = 3.9; // limb speed at the finish

    let raf;
    let last = performance.now();
    let elapsed = 0;

    const tick = (now) => {
      const dt = Math.min(now - last, 100);
      last = now;

      if (visible) {
        elapsed = (elapsed + dt) % (RUN + GAP);
        const running = elapsed < RUN;
        const t = running ? elapsed / RUN : 1;

        // accelerating position: slow start, fast finish
        const s = 0.25 * t + 0.75 * t * t;
        const tw = track.clientWidth;
        const x = -robotW - 10 + s * (tw + robotW + 30);
        robot.style.transform = `translate3d(${x}px,0,0)`;

        // stride speed follows travel speed
        const k = running ? t : 0;
        const rate = MIN_RATE + (MAX_RATE - MIN_RATE) * k;
        if (typeof robot.getAnimations === "function") {
          robot.getAnimations({ subtree: true }).forEach((a) => {
            a.playbackRate = rate;
          });
        }

        if (flame) {
          flame.style.transform = `scaleX(${0.3 + k * 1.5})`;
          flame.style.opacity = String(0.2 + k * 0.8);
        }
        if (trailRef.current) {
          trailRef.current.style.width = `${10 + k * 160}px`;
          trailRef.current.style.opacity = String(Math.min(1, k * 1.3));
        }
        if (meterRef.current) {
          meterRef.current.style.width = `${Math.round(k * 100)}%`;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [robotW]);

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className={`relative w-full overflow-hidden bg-gradient-to-r from-orange-50 via-amber-50 to-orange-100 ${className}`}
      style={{ height: size + 32 }}
    >
      {/* subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(249,115,22,.13) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* speed meter */}
      <div className="pointer-events-none absolute right-4 top-3 z-10 flex items-center gap-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">
          Speed
        </span>
        <span className="h-1.5 w-20 overflow-hidden rounded-full bg-orange-200/70">
          <span
            ref={meterRef}
            className="block h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-600"
            style={{ width: "0%" }}
          />
        </span>
      </div>

      {/* ground line + tick marks */}
      <div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500"
        style={{ bottom: GROUND }}
      />
      <div
        className="absolute left-0 right-0 h-[6px] opacity-60"
        style={{
          bottom: GROUND - 8,
          backgroundImage:
            "repeating-linear-gradient(90deg, #fdba74 0 2px, transparent 2px 24px)",
        }}
      />

      {/* robot + trail (moved by JS) */}
      <div
        ref={robotRef}
        className="absolute left-0"
        style={{
          width: robotW,
          height: size,
          bottom: GROUND - size * 0.0575,
          transform: "translate3d(-300px,0,0)",
          willChange: "transform",
        }}
      >
        <div
          ref={trailRef}
          className="absolute flex flex-col justify-between"
          style={{ right: "66%", top: "28%", height: "42%", width: 10, opacity: 0 }}
        >
          <span className="h-[2px] w-full rounded-full bg-gradient-to-l from-orange-400/80 to-transparent" />
          <span className="h-[2px] w-[70%] self-end rounded-full bg-gradient-to-l from-amber-400/80 to-transparent" />
          <span className="h-[2px] w-[88%] self-end rounded-full bg-gradient-to-l from-orange-500/70 to-transparent" />
        </div>
        <Robot />
      </div>
    </div>
  );
}