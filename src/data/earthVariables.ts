import {
  Thermometer,
  CloudRain,
  Trees,
  Wind,
  Factory,
  Shield,
} from "lucide-react";

export interface EarthVariable {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  icon: typeof Thermometer;
  gradient: string;
  glowColor: string;
  accentFrom: string;
  accentTo: string;
  hexColor: string;
  facts: string[];
}

export const earthVariables: EarthVariable[] = [
  {
    id: "temperature",
    number: "01",
    title: "Temperature",
    description: "Explore changes in Earth's surface and atmospheric temperatures.",
    longDescription:
      "Earth's temperature is a fundamental indicator of climate health. Satellites equipped with thermal infrared sensors continuously measure land surface temperatures, sea surface temperatures, and atmospheric heat profiles. These observations reveal warming trends, urban heat islands, and shifting climate zones — critical data for understanding global climate change.",
    icon: Thermometer,
    gradient: "from-orange-500 via-red-500 to-red-700",
    glowColor: "rgba(239, 68, 68, 0.5)",
    accentFrom: "239, 68, 68",
    accentTo: "249, 115, 22",
    hexColor: "#ef4444",
    facts: [
      "Global surface temperatures have risen approximately 1.1°C since the pre-industrial era.",
      "Satellite thermal sensors can detect temperature variations as small as 0.1°C from orbit.",
      "The last decade contained the ten warmest years on instrumental record.",
    ],
  },
  {
    id: "water-rainfall",
    number: "02",
    title: "Water & Rainfall",
    description:
      "Investigate precipitation patterns, water availability and changing rainfall trends.",
    longDescription:
      "Water is Earth's most vital resource, and satellites track its movement across the planet. From rainfall patterns and river flows to groundwater depletion and soil moisture, these observations help scientists monitor droughts, floods, and the delicate balance of the global water cycle that sustains all life.",
    icon: CloudRain,
    gradient: "from-cyan-400 via-blue-500 to-blue-700",
    glowColor: "rgba(34, 211, 238, 0.5)",
    accentFrom: "34, 211, 238",
    accentTo: "37, 99, 235",
    hexColor: "#22d3ee",
    facts: [
      "NASA's GRACE satellites measure groundwater changes by detecting tiny gravity shifts.",
      "The Global Precipitation Measurement mission captures rainfall data every 30 minutes globally.",
      "Over 2 billion people live in water-stressed regions worldwide.",
    ],
  },
  {
    id: "forest-vegetation",
    number: "03",
    title: "Forest & Vegetation",
    description:
      "Discover changes in vegetation, forest cover and Earth's greenery.",
    longDescription:
      "Forests are the lungs of our planet. Using NDVI (Normalized Difference Vegetation Index) from satellite imagery, scientists track the health and extent of forests, grasslands, and agricultural regions. These measurements reveal deforestation rates, seasonal growth cycles, and the impacts of wildfires and land-use change on Earth's biosphere.",
    icon: Trees,
    gradient: "from-green-400 via-emerald-500 to-teal-700",
    glowColor: "rgba(16, 185, 129, 0.5)",
    accentFrom: "16, 185, 129",
    accentTo: "20, 184, 166",
    hexColor: "#10b981",
    facts: [
      "Earth loses approximately 10 million hectares of forest each year.",
      "The Amazon rainforest produces 20% of the world's oxygen supply.",
      "Satellite NDVI data spans over 40 years of continuous vegetation monitoring.",
    ],
  },
  {
    id: "air-quality",
    number: "04",
    title: "Air Quality Index (AQI)",
    description: "Explore air quality patterns and atmospheric conditions.",
    longDescription:
      "Air quality affects billions of people daily. Satellites like NASA's TEMPO monitor pollutants including NO₂, SO₂, ozone, and particulate matter from geostationary orbit. This data provides hourly air quality measurements at neighborhood-level resolution, enabling public health responses and pollution tracking in real time.",
    icon: Wind,
    gradient: "from-sky-400 via-indigo-400 to-indigo-600",
    glowColor: "rgba(56, 189, 248, 0.5)",
    accentFrom: "56, 189, 248",
    accentTo: "99, 102, 241",
    hexColor: "#38bdf8",
    facts: [
      "Air pollution causes an estimated 7 million premature deaths annually.",
      "NASA's TEMPO satellite measures air quality hourly at 1.3 km resolution.",
      "AQI levels above 150 are considered unhealthy for the general population.",
    ],
  },
  {
    id: "pollution",
    number: "05",
    title: "Pollution Levels",
    description:
      "Investigate environmental pollution and its changes over time.",
    longDescription:
      "Environmental pollution takes many forms — from industrial emissions and oil spills to plastic accumulation and chemical contaminants. Multi-spectral satellite sensors detect aerosol concentrations, trace gases, and ocean color changes, enabling scientists to identify pollution sources, track their spread, and monitor environmental recovery efforts over time.",
    icon: Factory,
    gradient: "from-yellow-400 via-amber-500 to-orange-700",
    glowColor: "rgba(245, 158, 11, 0.5)",
    accentFrom: "245, 158, 11",
    accentTo: "234, 88, 12",
    hexColor: "#f59e0b",
    facts: [
      "Over 380 million tonnes of plastic are produced globally each year.",
      "Satellite aerosol optical depth tracks pollution particles smaller than 10 microns.",
      "The ozone-depleting CFC-11 emissions declined after satellite detection of illegal sources.",
    ],
  },
  {
    id: "ozone",
    number: "06",
    title: "Ozone Layer Thickness",
    description:
      "Understand changes in atmospheric ozone concentrations.",
    longDescription:
      "The ozone layer shields life on Earth from harmful ultraviolet radiation. Since the discovery of the Antarctic ozone hole in the 1980s, satellites have continuously monitored ozone concentrations at multiple altitudes. Thanks to the Montreal Protocol, the ozone layer is projected to recover by 2060 — a landmark success story of science-driven global policy.",
    icon: Shield,
    gradient: "from-violet-400 via-purple-500 to-fuchsia-700",
    glowColor: "rgba(168, 85, 247, 0.5)",
    accentFrom: "168, 85, 247",
    accentTo: "217, 70, 239",
    hexColor: "#a855f7",
    facts: [
      "The Antarctic ozone hole was discovered in 1985 using satellite data.",
      "The Montreal Protocol is the only UN treaty ratified by all 198 member states.",
      "Total column ozone is measured in Dobson Units — 1 DU = 0.01 mm thickness.",
    ],
  },
];
