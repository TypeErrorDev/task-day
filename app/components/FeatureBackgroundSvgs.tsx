import Image from "next/image";

export default function FeatureBackgroundSvgs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Top-left */}
      <Image
        src="/DBIcon.svg"
        alt=""
        width={64}
        height={64}
        className="absolute opacity-40"
        style={{ top: "15%", left: "6%" }}
      />

      {/* Top-right */}
      <Image
        src="/GrowthIcon.svg"
        alt=""
        width={56}
        height={56}
        className="absolute opacity-40"
        style={{ top: "15%", right: "8%" }}
      />

      {/* Middle-left (outside card zone) */}
      <Image
        src="/ListIcon.svg"
        alt=""
        width={72}
        height={72}
        className="absolute opacity-40"
        style={{ top: "50%", left: "4%", transform: "translateY(-50%)" }}
      />

      {/* Bottom-left */}
      <Image
        src="/ShieldIcon.svg"
        alt=""
        width={60}
        height={60}
        className="absolute opacity-40"
        style={{ bottom: "10%", left: "10%" }}
      />

      {/* Bottom-right */}
      <Image
        src="/TimeIcon.svg"
        alt=""
        width={68}
        height={68}
        className="absolute opacity-40"
        style={{ bottom: "12%", right: "6%" }}
      />
    </div>
  );
}
