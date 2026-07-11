export interface Fact {
  title: string;
  value: string;
  icon: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Landmark {
  id: string; // e.g. "statue-of-liberty"
  name: string;
  tagline: string;
  constructionYear: string;
  height: string;
  visitors: string;
  shortOverview: string;
  history: string;
  culturalSignificance: string;
  visitorInfo: string;
  interestingFacts: string[];
  timeline: TimelineEvent[];
  imageUrl: string;
  accentColor: string; // Tailwind color e.g., "amber-500", "yellow-400"
  mapCoords: { x: number; y: number }; // Percentage coordinate on our custom SVG map
  locationName: string; // e.g. "Liberty Island, NY Harbor"
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}
