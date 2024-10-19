type Faction = "Empire" | "Republic" | "Separatist" | "Rebel" | "UNSC" | "Covenant" | "Colonial" | "Cylon";
type Category = "Ship" | "Squadron" | "Play Material" | "Service";

interface Item {
  type: "Free STL" | "Paid STL" | "Model" | "Card" | "Base Token" | "Product";
  url: string;
  name: string;
}

interface Entity {
  name: string;
  category: Category;
  faction?: Faction[]; // Optional faction field
  image: string;
  items: Item[];
  description?: string;
}

const resources: Entity[] = [
  {
    name: "Assault Frigate Mark I",
    category: "Ship",
    faction: ["Rebel"],
    image: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:4748795",
        name: "Onil Creations",
      },
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:4700431",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1467667985",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1454377960",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1381161750",
        name: "SabreWorkshop",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1392292691",
        name: "SabreWorkshop",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1468909921",
        name: "TheShipBuilder",
      },
      {
        type: "Model",
        url: "https://www.shapeways.com/product/ZW2VWHVMA/armada-assault-frigate-mk-i-type-v?optionId=60727774&li=shops",
        name: "Mel Miniatures",
      },
    ],
  },
  {
    name: "HMP Gunship",
    category: "Squadron",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:5365444",
        name: "RVBLegend",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1568404510",
        name: "TheShipBuilder",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1563569242",
        name: "SabreWorkshop",
      },
    ],
  },
  {
    name: "Nantex",
    category: "Squadron",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:5406474",
        name: "Onil Creations",
      },
      {
        type: "Paid STL",
        url: "https://susyard.gumroad.com/l/XW-Nantex",
        name: "SUSSY",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/nantex-class-stl/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1231806650",
        name: "WesJanson3D",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1668068951",
        name: "TheShipBuilder",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1573990353",
        name: "SabreWorkshop",
      },
    ],
  },
  {
    name: "Rogue Starfighter",
    category: "Squadron",
    faction: ["Rebel"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/rouge-class-stl/",
        name: "Ethan LeRoith",
      },
    ],
  },
  {
    name: "Clone Z-95",
    category: "Squadron",
    faction: ["Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/z-95-squad-stl/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1705403923",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1224522480",
        name: "WesJanson3D",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1568435972",
        name: "TheShipBuilder",
      },
    ],
  },
  {
    name: "ETA-2",
    category: "Squadron",
    faction: ["Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/eta-2-actis-class-interceptor-stl-armada/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1263982126",
        name: "WesJanson3D",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1568466620",
        name: "TheShipBuilder",
      },
    ],
  },
  {
    name: "LAAT/i",
    category: "Squadron",
    faction: ["Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/laat-atmo-space-stl/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1671769964",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1585145949",
        name: "TheShipBuilder",
      },
    ],
  },
];

export type { Faction, Category, Item, Entity };

export { resources };
