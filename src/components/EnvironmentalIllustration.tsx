import {
  Activity,
  CloudRain,
  Droplets,
  Globe2,
  Leaf,
  Satellite,
  Waves,
  Wind,
} from "lucide-react";

type IllustrationKind = "temperature" | "water" | "air";

export default function EnvironmentalIllustration({
  kind,
}: {
  kind: IllustrationKind;
}) {
  if (kind === "temperature") {
    return (
      <div className="environment-visual thermal-visual" aria-hidden="true">
        <div className="thermal-orbit thermal-orbit-one" />
        <div className="thermal-orbit thermal-orbit-two" />
        <div className="thermal-globe">
          <div className="thermal-globe-shine" />
          <Globe2 className="thermal-globe-icon" strokeWidth={0.75} />
          <span className="thermal-contour contour-one" />
          <span className="thermal-contour contour-two" />
          <span className="thermal-contour contour-three" />
        </div>
        <div className="ozone-ring">
          <span />
          <span />
          <span />
        </div>
        <div className="thermal-label label-top">
          <span className="signal-dot" />
          THERMAL OBSERVATION
        </div>
        <div className="thermal-label label-bottom">
          <Satellite size={14} />
          ATMOSPHERIC PROFILE
        </div>
        <span className="heat-particle heat-one" />
        <span className="heat-particle heat-two" />
        <span className="heat-particle heat-three" />
      </div>
    );
  }

  if (kind === "water") {
    return (
      <div className="environment-visual water-visual" aria-hidden="true">
        <div className="water-cloud cloud-one"><CloudRain /></div>
        <div className="water-cloud cloud-two"><CloudRain /></div>
        <div className="water-world">
          <div className="water-world-land land-one" />
          <div className="water-world-land land-two" />
          <span className="river-line river-one" />
          <span className="river-line river-two" />
        </div>
        <div className="water-wave wave-one"><Waves /></div>
        <div className="water-wave wave-two"><Waves /></div>
        <div className="vegetation-sprig sprig-one"><Leaf /></div>
        <div className="vegetation-sprig sprig-two"><Leaf /></div>
        <div className="water-label">
          <Droplets size={14} />
          WATER • LAND • LIFE
        </div>
        <span className="rain-drop rain-one" />
        <span className="rain-drop rain-two" />
        <span className="rain-drop rain-three" />
      </div>
    );
  }

  return (
    <div className="environment-visual air-visual" aria-hidden="true">
      <div className="air-grid" />
      <div className="cityline">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="air-wave air-wave-one" />
      <div className="air-wave air-wave-two" />
      <div className="air-wave air-wave-three" />
      <div className="air-monitor">
        <div className="air-monitor-top"><Activity size={15} /> ATMOSPHERE</div>
        <div className="air-monitor-line" />
        <div className="air-monitor-bottom"><Wind size={16} /> TRACE GASES</div>
      </div>
      <div className="air-satellite"><Satellite size={20} /></div>
      <span className="air-particle particle-one" />
      <span className="air-particle particle-two" />
      <span className="air-particle particle-three" />
      <span className="air-particle particle-four" />
      <div className="air-label">AEROSOLS • GASES • AIR</div>
    </div>
  );
}
