import { Landmark, StatItem } from "../types";

export const landmarks: Landmark[] = [
  {
    id: "statue-of-liberty",
    name: "Statue of Liberty",
    tagline: "The Beacon of Universal Freedom",
    constructionYear: "1886",
    height: "305 ft (93m)",
    visitors: "4.4 Million / year",
    locationName: "Liberty Island, NY Harbor",
    accentColor: "#4fd1c5", // teal-400
    shortOverview: "A colossal neoclassical sculpture on Liberty Island in New York Harbor, designed by Frédéric-Auguste Bartholdi and built by Gustave Eiffel as a gift of friendship from France.",
    history: "Inaugurated on October 28, 1886, the statue was conceived to celebrate the abolition of slavery and the centennial of the American Declaration of Independence. The copper skin was hammered by hand, and Gustave Eiffel designed the internal iron framework that allows the statue to flex in harbor winds. It served as the primary gateway for over 12 million immigrants arriving in the United States by sea.",
    culturalSignificance: "Representing Libertas, the Roman goddess of freedom, she holds a torch above her head and a tablet inscribed with 'JULY IV MDCCLXXVI' (July 4, 1776). A broken shackle and chain lie at her feet, symbolizing the end of slavery. She has become the ultimate global icon of hope, democracy, and human rights.",
    visitorInfo: "Accessible only via commercial ferries. Crown access requires advanced reservations months in advance. The monument features an interactive museum detailing its construction and symbolism.",
    interestingFacts: [
      "The statue is made of pure copper, about the thickness of two pennies, which turned green (patina) due to natural oxidation over 30 years.",
      "The seven rays of her crown represent the seven seas and seven continents of the world.",
      "She stands in the path of heavy winds and can sway up to 3 inches, while her torch can sway up to 5 inches."
    ],
    timeline: [
      { year: "1865", title: "The Concept", description: "Édouard René de Laboulaye proposes a monument presented by France to the United States." },
      { year: "1875", title: "Bartholdi's Design", description: "Sculptor Bartholdi begins crafting the plaster sections of the Statue." },
      { year: "1884", title: "Assembly in Paris", description: "The completed statue is formally presented to the US Ambassador in Paris." },
      { year: "1886", title: "The Dedication", description: "Reassembled on Liberty Island, President Grover Cleveland dedicates the statue." },
      { year: "1986", title: "Centennial Restoration", description: "The torch is replaced with a gold-leafed version during a massive restoration." }
    ],
    imageUrl: "/images/statue-of-liberty.jpg",
    mapCoords: { x: 26, y: 88 }
  },
  {
    id: "times-square",
    name: "Times Square",
    tagline: "The Crossroads of the World",
    constructionYear: "1904 (Renamed)",
    height: "Ground Level Hub",
    visitors: "50 Million / year",
    locationName: "Midtown Manhattan, Junction of Broadway & 7th Ave",
    accentColor: "#ef4444", // red-500
    shortOverview: "A major commercial intersection, tourist destination, entertainment center, and neighborhood in Midtown Manhattan, renowned for its brilliant neon billboards and bustling 24/7 energy.",
    history: "Originally called Longacre Square, it was renamed Times Square in April 1904 after the New York Times moved its headquarters to the newly built Times Building. The first New Year's Eve ball drop took place here in 1907. It went through a dark, crime-ridden era in the 1970s and 1980s before being successfully revitalized in the 1995 'Disneyfication' era into a family-friendly tourist destination.",
    culturalSignificance: "The heart of the Broadway Theater District and the global focal point of New Year's Eve celebrations. Its massive digital billboards have made it one of the most intensely photographed places in the world, embodying the raw commercial and creative energy of New York.",
    visitorInfo: "Entirely pedestrianized since 2009. The red steps above the TKTS booth offer the best panoramic views of the entire plaza. Visit late at night to experience the famous 'Midnight Moment' digital art display.",
    interestingFacts: [
      "Times Square's bright lights are so powerful they are visible from outer space by astronauts on the International Space Station.",
      "The annual New Year's Eve ball weighs 11,875 pounds and is covered with 2,688 Waterford Crystal triangles.",
      "By law, buildings in Times Square must feature a minimum amount of high-density luminous display lighting."
    ],
    timeline: [
      { year: "1904", title: "The Name Change", description: "Longacre Square is renamed Times Square to celebrate the new NY Times tower." },
      { year: "1907", title: "First Ball Drop", description: "A wood-and-iron ball covered in 100 light bulbs is lowered on New Year's Eve." },
      { year: "1928", title: "The Motograph", description: "The famous zipper news ticker is installed, projecting real-time headlines." },
      { year: "2009", title: "Pedestrian Plaza", description: "Major parts of Broadway through Times Square are permanently closed to car traffic." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1534430480872-3498386e7a0c?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 42, y: 44 }
  },
  {
    id: "central-park",
    name: "Central Park",
    tagline: "The Emerald Heart of Manhattan",
    constructionYear: "1858 (Opened)",
    height: "843 Acres (3.41 km²)",
    visitors: "42 Million / year",
    locationName: "Upper Manhattan, Fifth to Eighth Avenues",
    accentColor: "#22c55e", // green-500
    shortOverview: "An expansive, urban oasis nestled in the center of Manhattan, designed by landscape architects Frederick Law Olmsted and Calvert Vaux in their winning 'Greensward Plan'.",
    history: "In 1853, the New York State Legislature authorized the purchase of land for a public park to relieve the congestion of the rapidly expanding city. Creating the park required clearing rugged terrain, swamps, and small settlements. Over 5 million cubic yards of earth, stone, and topsoil were moved to construct the highly curated, seemingly natural landscape.",
    culturalSignificance: "A designated National Historic Landmark, it serves as the lung of NYC and a sanctuary for both New Yorkers and over 300 species of migratory birds. It is the most filmed location in movie history, appearing in thousands of films and television episodes.",
    visitorInfo: "Open daily from 6:00 AM to 1:00 AM. Key highlights include the Bethesda Terrace, Bow Bridge, The Mall, and the Conservatory Water where miniature model sailboats are raced.",
    interestingFacts: [
      "Central Park is larger than some small nations, including Monaco and the Vatican City.",
      "Almost every square inch of the park is entirely man-made, including its several artificial lakes, waterfalls, and winding pathways.",
      "Beneath the park lies a network of historic, hidden arches and bridges—36 in total—each individually designed with unique stone and brick patterns."
    ],
    timeline: [
      { year: "1853", title: "Land Acquisition", description: "New York State passes a law setting aside 750 acres for the municipal park." },
      { year: "1858", title: "Greensward Plan", description: "Frederick Law Olmsted and Calvert Vaux win the public design competition." },
      { year: "1876", title: "Completion", description: "After two decades of intensive landscape sculpting, the park is completed." },
      { year: "1980", title: "The Conservancy", description: "The Central Park Conservancy is founded to restore the park from decay." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 50, y: 22 }
  },
  {
    id: "empire-state-building",
    name: "Empire State Building",
    tagline: "The Sky-High Art Deco Marvel",
    constructionYear: "1931",
    height: "1,454 ft (443.2m)",
    visitors: "4 Million / year",
    locationName: "Midtown Manhattan, 350 Fifth Ave",
    accentColor: "#f59e0b", // amber-500
    shortOverview: "A world-famous 102-story Art Deco skyscraper in Midtown Manhattan, standing as an enduring symbol of American grit and architectural genius.",
    history: "Designed by Shreve, Lamb & Harmon, the building was constructed during the height of the Great Depression as part of a race to build the world's tallest building. The structure rose at an astonishing rate of 4.5 stories per week, taking just 1 year and 45 days to complete. It remained the world's tallest building for a record-breaking 40 years.",
    culturalSignificance: "A cultural icon featured in iconic films from King Kong to Sleepless in Seattle. Its dynamic LED lighting system honors holidays, sports teams, and global events by projecting a spectrum of colors across the night sky.",
    visitorInfo: "Observatories are open on both the 86th (open-air) and 102nd (glass-enclosed) floors. Best visited at sunrise or midnight to avoid crowds and witness the absolute horizon of the city.",
    interestingFacts: [
      "The spire at the top was originally designed as a mooring mast for passenger airships (Zeppelins), but the plan was abandoned due to high winds.",
      "The building is struck by lightning an average of 25 times per year, acting as a giant lightning rod for Midtown Manhattan.",
      "In 1945, a B-25 Mitchell bomber crashed into the 79th floor of the building during a heavy fog, but the structure remained fully intact."
    ],
    timeline: [
      { year: "1930", title: "Construction Starts", description: "Excavation begins on the site of the former Waldorf-Astoria Hotel." },
      { year: "1931", title: "The Opening", description: "President Herbert Hoover turns on the building's lights from Washington, D.C." },
      { year: "1950", title: "The Antenna Spire", description: "A new 222-foot television antenna is added, maximizing its towering profile." },
      { year: "2009", title: "Going Green", description: "A $120 million retrofitting project makes it one of the world's most eco-friendly towers." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1502104034360-73176bb1e92e?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 44, y: 52 }
  },
  {
    id: "brooklyn-bridge",
    name: "Brooklyn Bridge",
    tagline: "The Eighth Wonder of the World",
    constructionYear: "1883",
    height: "276 ft (84.1m) Towers",
    visitors: "10 Million / year",
    locationName: "Spans the East River from Manhattan to Brooklyn",
    accentColor: "#e2e8f0", // silver / slate-200
    shortOverview: "A hybrid cable-stayed/suspension bridge spanning the East River, celebrated for its soaring Neo-Gothic granite towers and intricate web of steel cables.",
    history: "Designed by John Augustus Roebling, its construction was a harrowing epic that took 14 years and cost the lives of over 20 workers, including Roebling himself. His son, Washington Roebling, took over but fell ill with decompression sickness ('the bends'). Washington's wife, Emily Warren Roebling, stepped in as the field engineer and project coordinator, triumphantly leading the bridge to completion.",
    culturalSignificance: "The first steel-wire suspension bridge ever constructed, it immediately became an American symbol of technological triumph. It is a National Historic Landmark that inspires poets, photographers, and dreamers worldwide.",
    visitorInfo: "The elevated pedestrian promenade is completely free and separated from vehicle traffic. Walk from the Brooklyn side toward Manhattan at sunset for the most spectacular views of the iconic skyline.",
    interestingFacts: [
      "To prove the bridge was safe to skeptical citizens, the legendary showman P.T. Barnum led a parade of 21 elephants across it in 1884.",
      "Beneath the bridge's massive stone ramps, deep vaults were rented out as cold-storage wine cellars to help fund the construction.",
      "The bridge's design is six times stronger than was deemed necessary at the time, which is why it still stands solid today."
    ],
    timeline: [
      { year: "1869", title: "Tragedy & Succession", description: "John Roebling dies of an injury; his son Washington and wife Emily take charge." },
      { year: "1876", title: "The First Cable", description: "The first steel wire is strung across the East River, linking the two boroughs." },
      { year: "1883", title: "Triumphant Opening", description: "Emily Roebling is the first to cross, carrying a rooster as a symbol of victory." },
      { year: "2021", title: "Pedestrian Upgrades", description: "A dedicated bike lane is added, freeing up the historic upper boardwalk." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 53, y: 75 }
  },
  {
    id: "rockefeller-center",
    name: "Rockefeller Center",
    tagline: "A City Within a City",
    constructionYear: "1939",
    height: "850 ft (259m) peak",
    visitors: "35 Million / year",
    locationName: "Midtown Manhattan, 48th to 51st Streets",
    accentColor: "#e9d5ff", // purple-200
    shortOverview: "A massive complex of 19 commercial Art Deco buildings in Midtown Manhattan, commissioned by the billionaire philanthropist John D. Rockefeller Jr.",
    history: "Conceived in the late 1920s as an opera house, the stock market crash of 1929 forced John D. Rockefeller Jr. to completely pivot and finance the entire project himself. Built during the depression, it employed over 40,000 workers. It represents one of the greatest real estate and architectural endeavors of the modern era.",
    culturalSignificance: "Home to NBC Studios (where Saturday Night Live and The Tonight Show are broadcast), the world-famous Rockefeller Plaza Ice Skating Rink, and the legendary Rockefeller Center Christmas Tree. It stands as a beacon of public celebration and broadcast history.",
    visitorInfo: "The 'Top of the Rock' observation deck offers an unobstructed, symmetrical view of the Empire State Building and a wide-open panorama of Central Park. Guided tours of NBC Studios are highly sought after.",
    interestingFacts: [
      "The famous 1932 photograph 'Lunch atop a Skyscraper', showing workers eating lunch sitting on a high steel girder, was shot during the construction of 30 Rockefeller Plaza.",
      "The statue of Atlas holding the celestial spheres in front of the International Building weighs a massive 7 tons.",
      "The Rockefeller Christmas Tree is typically a Norway Spruce ranging from 69 to 100 feet tall, decorated with over 50,000 LED lights."
    ],
    timeline: [
      { year: "1931", title: "Groundbreaking", description: "Demolition of old brownstones begins under Rockefeller's sole financial backing." },
      { year: "1933", title: "First Tree & Rink", description: "Construction workers erect the first Christmas tree; the skating rink opens shortly after." },
      { year: "1939", title: "Art Deco Triumph", description: "The final rivet is driven, completing the historic 14 original Art Deco buildings." },
      { year: "2005", title: "Top of the Rock", description: "The legendary observation deck is completely renovated and reopened to the public." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 46, y: 38 }
  },
  {
    id: "grand-central-terminal",
    name: "Grand Central Terminal",
    tagline: "The Temple of Transit",
    constructionYear: "1913",
    height: "125 ft (38m) Main Concourse",
    visitors: "21 Million / year (Non-commuters)",
    locationName: "Midtown Manhattan, 89 E 42nd St",
    accentColor: "#fbbf24", // yellow-400
    shortOverview: "A historic, world-renowned commuter railroad terminal in Midtown Manhattan, lauded for its magnificent Beaux-Arts architecture and astrological ceiling.",
    history: "Built by the Vanderbilt family, Grand Central was designed by Reed & Stem and Warren & Wetmore. It replaced an outdated steam locomotive station with a multi-level, completely electrified underground terminal. It was saved from demolition in 1978 in a landmark US Supreme Court case led by Jacqueline Kennedy Onassis.",
    culturalSignificance: "A masterpiece of public art and city planning. The terminal is a romantic meeting spot, famously capturing the cinematic hustle and bustle of metropolitan life with its sweeping staircases, brass chandeliers, and the legendary four-faced opal clock.",
    visitorInfo: "Explore the whispering gallery underneath the Oyster Bar, where acoustic anomalies allow you to hear a whisper from across the arch. Check out the Campbell Bar for a taste of Prohibition-era luxury.",
    interestingFacts: [
      "The astronomical ceiling in the Main Concourse is painted backward (west is east, and vice versa). Cornelius Vanderbilt claimed it was from God's point of view.",
      "The four-faced clock at the center information booth is made of solid opal and is valued at over $20 million.",
      "Deep beneath the terminal lies 'M42', a secret underground bunker that was a target of sabotage during World War II because it powered the entire train network."
    ],
    timeline: [
      { year: "1903", title: "Electrification Plan", description: "Construction begins on a massive scale to bury the tracks and switch to electric power." },
      { year: "1913", title: "Grand Opening", description: "More than 150,000 visitors arrive on opening day to marvel at the Beaux-Arts terminal." },
      { year: "1978", title: "Saved from Towers", description: "The Supreme Court blocks a plan to build an office tower directly on top of the station." },
      { year: "1998", title: "Great Restoration", description: "A massive cleanup removes decades of tobacco smoke and grime, revealing the bright blue ceiling." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1495954380655-01609180edd3?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 50, y: 46 }
  },
  {
    id: "fifth-avenue",
    name: "Fifth Avenue",
    tagline: "The Luxury Boulevard of Dreams",
    constructionYear: "1824 (Est.)",
    height: "6.2 Miles (9.9 km) Length",
    visitors: "15 Million / year",
    locationName: "Manhattan, runs from Washington Square to 142nd St",
    accentColor: "#fbbf24", // gold / amber
    shortOverview: "A world-famous thoroughfare in the center of Manhattan, recognized globally as the ultimate destination for luxury retail, historic mansions, and elite culture.",
    history: "Originally a humble dirt road, Fifth Avenue became the undisputed golden corridor of New York during the Gilded Age. The city's wealthiest families—including the Astors, Vanderbilts, and Fricks—built opulent châteaux and mansions along its path, which were later replaced by luxury department stores and cultural institutions.",
    culturalSignificance: "Home to the 'Museum Mile' (containing the Metropolitan Museum of Art, Guggenheim, and more) as well as the world's most valuable retail spaces. It is a symbol of absolute wealth, fine architecture, and prestigious fashion design.",
    visitorInfo: "The premier luxury shopping stretch runs from 49th to 60th streets. Take an architectural stroll starting at St. Patrick's Cathedral and ending at the iconic glass cube of the Fifth Avenue Apple Store.",
    interestingFacts: [
      "Fifth Avenue is consistently ranked as the most expensive retail street in the entire world, with annual lease rates exceeding $3,000 per square foot.",
      "By city tradition, Fifth Avenue hosts New York's major parades, including the massive St. Patrick's Day Parade, which dates back to 1762.",
      "The public library on Fifth Ave is guarded by two famous marble lions named 'Patience' and 'Fortitude' by Mayor Fiorello La Guardia during the Great Depression."
    ],
    timeline: [
      { year: "1824", title: "The Laying Out", description: "The street is formally established as a public highway in the Commissioner's Map." },
      { year: "1890", title: "The Gilded Age Peak", description: "The avenue is lined with the country's most lavish private palaces and mansions." },
      { year: "1906", title: "B. Altman & Co. Opens", description: "The first major department store opens on the avenue, starting the retail revolution." },
      { year: "1970", title: "Museum Mile Founded", description: "The cultural institutions coordinate to form a unified block of world-class museums." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 45, y: 34 }
  },
  {
    id: "one-world-trade-center",
    name: "One World Trade Center",
    tagline: "A Tower of Resilience and Hope",
    constructionYear: "2014",
    height: "1,776 ft (541.3m)",
    visitors: "3.5 Million / year",
    locationName: "Lower Manhattan, 285 Fulton St",
    accentColor: "#60a5fa", // blue-400
    shortOverview: "The main building of the rebuilt World Trade Center complex, standing as the tallest building in the Western Hemisphere and a testament to the city's unbreakable spirit.",
    history: "Designed by David Childs of Skidmore, Owings & Merrill, the tower was constructed on the site of the original World Trade Center complex. Its height of exactly 1,776 feet is a deliberate reference to the year the United States Declaration of Independence was signed. It features state-of-the-art blast-resistant concrete, heavy steel structures, and an ultra-secure core.",
    culturalSignificance: "Standing adjacent to the National September 11 Memorial & Museum, the tower represents a triumph of modern engineering and a symbol of renewal, unity, and resilience in the face of tragedy.",
    visitorInfo: "The One World Observatory occupies floors 100, 101, and 102, offering immersive, high-tech multimedia exhibits, a breathtaking virtual time-lapse elevator ride, and a 360-degree skyline panorama.",
    interestingFacts: [
      "The tower's base is a perfect 200-foot square, matching the exact footprint of the twin towers that once stood on the site.",
      "The massive spire at the top contains a beacon that projects a powerful beam of light visible for tens of miles across the Atlantic Ocean.",
      "The outer glass skin consists of 12,000 custom panels designed to capture and reflect light at unique angles throughout the day."
    ],
    timeline: [
      { year: "2006", title: "Foundation Stone", description: "Construction officially begins on the deep bedrock of Lower Manhattan." },
      { year: "2012", title: "Tallest in NYC", description: "The steel framework surpasses the height of the Empire State Building." },
      { year: "2014", title: "Grand Opening", description: "The finished tower welcomes its first commercial publishing tenants." },
      { year: "2015", title: "Observatory Debuts", description: "The state-of-the-art interactive observation deck opens to the public." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1502301197179-65228ab57f78?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 38, y: 72 }
  },
  {
    id: "broadway",
    name: "Broadway",
    tagline: "The Great White Way",
    constructionYear: "1893 (First Theatre)",
    height: "41 Professional Theatres",
    visitors: "14 Million / year",
    locationName: "Theatre District, Midtown Manhattan",
    accentColor: "#facc15", // yellow-400
    shortOverview: "The world's premier theatrical hub, consisting of 41 professional theatres along the historic diagonal street of Broadway in Midtown Manhattan.",
    history: "Originally a Native American trail called Wickquasgeck, it is the oldest north-south main street in New York City. The theatrical industry migrated uptown to the Times Square area in the late 19th century, drawn by cheaper land and the new subway line. It gained the nickname 'The Great White Way' because of its blinding electric theater marquees.",
    culturalSignificance: "The absolute pinnacle of live theatrical performance in the English-speaking world. Producing iconic, record-breaking musicals from The Phantom of the Opera to Hamilton, it represents a massive global creative economy and a gold standard of storytelling craft.",
    visitorInfo: "Buy discounted same-day show tickets at the TKTS booth in Times Square. Make sure to arrive early to appreciate the historical architecture of theaters like the Lyceum or New Amsterdam.",
    interestingFacts: [
      "Only theaters with 500 or more seats located in the Theatre District are eligible to be considered official 'Broadway' theatres.",
      "The longest-running show in Broadway history is The Phantom of the Opera, which played 13,981 performances over 35 years before closing in 2023.",
      "To show respect to deceased theater icons, Broadway theaters 'dim' their marquee lights for exactly one minute before curtain time."
    ],
    timeline: [
      { year: "1893", title: "The First Marquee", description: "The Empire Theatre opens, establishing the brand-new theatrical strip." },
      { year: "1947", title: "First Tony Awards", description: "The American Theatre Wing establishes the awards to celebrate theatrical excellence." },
      { year: "1988", title: "The Phantom Arrives", description: "Andrew Lloyd Webber's masterpiece begins its legendary, record-breaking run." },
      { year: "2015", title: "The Hamilton Phenomenon", description: "Lin-Manuel Miranda's musical debuts, redefining modern Broadway and cultural history." }
    ],
    imageUrl: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1920&q=80",
    mapCoords: { x: 39, y: 40 }
  }
];

export const statistics: StatItem[] = [
  {
    id: "population",
    label: "NYC Population",
    value: 8.3,
    suffix: " Million",
    description: "The most populous city in the United States, spread across 5 unique boroughs.",
    iconName: "Users"
  },
  {
    id: "visitors",
    label: "Annual Visitors",
    value: 66.6,
    suffix: " Million",
    description: "Global travelers arriving annually to experience New York's cultural landmarks.",
    iconName: "Compass"
  },
  {
    id: "skyscrapers",
    label: "Skyscrapers",
    value: 300,
    suffix: "+ Towers",
    description: "Buildings exceeding 150 meters (492 feet), forming the world's most recognizable skyline.",
    iconName: "Building2"
  },
  {
    id: "subway",
    label: "Subway Stations",
    value: 472,
    suffix: " Stations",
    description: "The largest rapid transit system in the world by number of operating stations, open 24/7.",
    iconName: "Train"
  },
  {
    id: "boroughs",
    label: "Boroughs",
    value: 5,
    suffix: " Regions",
    description: "Manhattan, Brooklyn, Queens, The Bronx, and Staten Island—each a rich cultural tapestry.",
    iconName: "Map"
  },
  {
    id: "theatres",
    label: "Broadway Theatres",
    value: 41,
    suffix: " Stages",
    description: "Elite theatrical venues hosting world-class musical and dramatic productions.",
    iconName: "Tv"
  }
];
