type Faction = "Empire" | "Republic" | "Separatist" | "Rebel" | "Scum & Villainy" | "New Republic" | "Colonial" | "Cylon" | "UNSC" | "Covenant";
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
    name: "Armada Nexus Base Tokens",
    category: "Play Material",
    faction: [],
    image: "",
    description: "",
    items: [
      {
        type: "Base Token",
        url: "https://cults3d.com/en/3d-model/game/armada-legends-fdm-dials-and-tokens",
        name: "SpaceNavy",
      },
      {
        type: "Base Token",
        url: "https://cults3d.com/en/3d-model/game/halo-armada-squadron-fdm-dial-tokens",
        name: "SpaceNavy",
      },
      {
        type: "Base Token",
        url: "https://makerworld.com/models/1001173",
        name: "WobbleKing",
      }
    ],
  },
  {
    name: "Subjugator Heavy Cruiser",
    category: "Ship",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944638",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/subjugator-stl-armada/",
        name: "Ethan LeRoith",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/subjugator-class-star-wars-armada",
        name: "Ravensfell",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1447388316",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1792963605",
        name: "Memnoch Manufacturing",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1778769094",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "Dreadnaught Heavy Cruiser",
    category: "Ship",
    faction: ["Empire","Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6237460",
        name: "Onil Creations",
      },
      {
        type: "Paid STL",
        url: "https://www.myminifactory.com/object/3d-print-dreadnought-imperial-refit-410297",
        name: "SUSSY",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1394452940",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1645844933",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1636814746",
        name: "Memnoch Manufacturing",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1842488476",
        name: "StellarEndeavors",
      },
    ],
  },
  {
    name: "Alpha Star Wing",
    category: "Squadron",
    faction: ["Empire"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944215",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1590025408",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "MC40a Light Cruiser",
    category: "Ship",
    faction: ["Rebel"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944202",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1286415795",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1387454914",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1447834546",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1657861810",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "Lancer Frigate",
    category: "Ship",
    faction: ["Empire"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6947231",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1428060759",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1408398373",
        name: "Pulsefired Gaming",
      },
    ],
  },
  {
    name: "Trident Assault Ship",
    category: "Ship",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6669273",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/trident-stl/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1734079654",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Lucrehulk Battleship",
    category: "Ship",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6662333",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/lucrehulk/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1748366015",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Interdictor Star Destroyer",
    category: "Ship",
    faction: ["Empire"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6662327",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/interdictor-class-star-destroyer-stl/",
        name: "Ethan LeRoith",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1590164648",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1386305967",
        name: "Bossnoss Creations",
      }
    ],
  },
  {
    name: "MC80b Star Cruiser",
    category: "Ship",
    faction: ["Rebel","New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6662244",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1654199804",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1680098192",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "IPV-2C Stealth Corvette",
    category: "Ship",
    faction: ["Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6660921",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1328772975",
        name: "Bossnoss Creations",
      }
    ],
  },
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
        url: "https://www.etsy.com/listing/1856689417",
        name: "StellarEndeaours",
      }
    ],
    description: "",
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
        url: "https://www.thingiverse.com/thing:6826780",
        name: "Armada_Legacy",
      },
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:5365444",
        name: "RVBLegend",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1757117672",
        name: "Pulsefired Gaming",
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
        url: "https://www.thingiverse.com/thing:6826792",
        name: "Armada_Legacy",
      },
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
        url: "https://resinengine.com/product/nantex-stl/",
        name: "Ethan LeRoith",
      }
    ],
  },
  {
    name: "Rogue Starfighter",
    category: "Squadron",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826796",
        name: "Armada_Legacy",
      },
      {
        type: "Paid STL",
        url: "https://www.myminifactory.com/object/3d-print-rogue-porax-p38-starfighter-squadron-412730",
        name: "SUSSY",
      }
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
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826766",
        name: "Armada_Legacy",
      },
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
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826775",
        name: "Armada_Legacy",
      },
      {
        type: "Paid STL",
        url: "https://resinengine.com/product/eta-2-actis-interceptor-stl-armada/",
        name: "Ethan LeRoith",
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
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826782",
        name: "Armada_Legacy",
      },
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
  {
    name: "G9 Freighter",
    category: "Squadron",
    faction: ["Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826778",
        name: "Armada_Legacy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1783123335",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Sith Infiltrator",
    category: "Squadron",
    faction: ["Separatist"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6826801",
        name: "Armada_Legacy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1749676619",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Neutron Star Bulk Cruiser",
    category: "Ship",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1413838446",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1406529765",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Action-VI Transports",
    category: "Ship",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:4251194",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1604202197",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Interceptor-IV Frigate",
    category: "Ship",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:5245951",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1586452210",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Marauder Corvette",
    category: "Ship",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944686",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1453098685",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1417330035",
        name: "Bossnoss Creations",
      }
    ],
  },
  {
    name: "Rihkxyrk Heavy Fighter",
    category: "Squadron",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:4105146",
        name: "Onil Creations",
      }
    ],
  },
  {
    name: "Ugly Starfighters",
    category: "Squadron",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1013102632",
        name: "Onil Creations",
      }
    ],
  },
  {
    name: "Vigo Gunship",
    category: "Squadron",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944580",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Kihraxz Fighter",
    category: "Squadron",
    faction: ["Scum & Villainy"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944573",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Nebula Star Destroyer",
    category: "Ship",
    faction: ["New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://www.myminifactory.com/object/3d-print-nebula-star-destroyer-410428",
        name: "SUSSY",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1699647646",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1698602692",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "Endurance Fleet Carrier",
    category: "Ship",
    faction: ["New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://www.myminifactory.com/object/3d-print-endurance-star-destroyer-454061",
        name: "SUSSY",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1803416701",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1853513414",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "MC90 Star Cruiser",
    category: "Ship",
    faction: ["New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1259915785",
        name: "Onil Creations",
      },
      {
        type: "Paid STL",
        url: "https://www.etsy.com/listing/1259914335",
        name: "Onil Creations",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1387458144",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1640854203",
        name: "Memnoch Manufacturing",
      }
    ],
  },
  {
    name: "Corona Frigate",
    category: "Ship",
    faction: ["New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944685",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://only-games.co/products/armada-corona-frigate",
        name: "Mel Miniatures",
      }
    ],
  },
  {
    name: "K-wing Starfighter",
    category: "Squadron",
    faction: ["New Republic"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6944660",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1715941308",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Paris Frigate",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6682737",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/paris-charon-stalwart-halo-fleet-battles",
        name: "Ravensfell",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1821837066",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Stalwart Frigate",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6682737",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/paris-charon-stalwart-halo-fleet-battles",
        name: "Ravensfell",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1837733515",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Charon Frigate",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1823532720",
        name: "Pulsefired Gaming",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/paris-charon-stalwart-halo-fleet-battles",
        name: "Ravensfell",
      },
    ],
  },
  {
    name: "Halcyon Cruiser",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6682737",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1828065726",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Longsword Squadron",
    category: "Squadron",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6731088",
        name: "SpaceNavy",
      },
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6731089",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1848392502",
        name: "Pulsefired Gaming",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1848391336",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Marathon Cruiser",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6683540",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Halberd Destroyer",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6734079",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Erod SMAC",
    category: "Ship",
    faction: ["UNSC"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1867617223",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "CCS Battlecruiser",
    category: "Ship",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6682982",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1836179699",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "SDV Corvette",
    category: "Ship",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6731136",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/sdv-corvette-halo-fleet-battles",
        name: "Ravensfell",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1829045358",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "CRS Light Cruiser",
    category: "Ship",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6734087",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1846533050",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "CAS Assault Carrier",
    category: "Ship",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6734093",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Banshee Squadron",
    category: "Squadron",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6731094",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Seraph Squadron",
    category: "Squadron",
    faction: ["Covenant"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6731093",
        name: "SpaceNavy",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1857691109",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Jupiter Battlestar",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6738379",
        name: "SpaceNavy",
      },
      {
        type: "Paid STL",
        url: "https://cults3d.com/en/3d-model/game/jupiter-class-battle-star-galactica",
        name: "Ravensfell",
      },
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1827468041",
        name: "Pulsefired Gaming",
      }
    ],
  },
  {
    name: "Mercury Battlestar",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6685402",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Manticore Corvette",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6738373",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Adamant Frigate",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1701816097",
        name: "Pullsefired Gaming",
      }
    ],
  },
  {
    name: "Hercules Cruiser",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1702288677",
        name: "Pullsefired Gaming",
      }
    ],
  },
  {
    name: "Viper MkII",
    category: "Squadron",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1687063760",
        name: "Pullsefired Gaming",
      }
    ],
  },
  {
    name: "Raptor Squadron",
    category: "Squadron",
    faction: ["Colonial"],
    image: "",
    description: "",
    items: [
      {
        type: "Model",
        url: "https://www.etsy.com/listing/1701240813",
        name: "Pullsefired Gaming",
      }
    ],
  },
  {
    name: "Modern Basestar",
    category: "Ship",
    faction: ["Cylon"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6684013",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Cerastes Gunship",
    category: "Ship",
    faction: ["Cylon"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6738460",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Phobs Cruiser",
    category: "Ship",
    faction: ["Cylon"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6740364",
        name: "SpaceNavy",
      }
    ],
  },
  {
    name: "Nemesis Corvette",
    category: "Ship",
    faction: ["Cylon"],
    image: "",
    description: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6738450",
        name: "SpaceNavy",
      }
    ],
  },
];

export type { Faction, Category, Item, Entity };

export { resources };