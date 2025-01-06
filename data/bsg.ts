type Faction = "Colonial" | "Cylon";
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
    name: "Jupiter-class Battlestar",
    category: "Ship",
    faction: ["Colonial"],
    image: "",
    items: [
      {
        type: "Free STL",
        url: "https://www.thingiverse.com/thing:6738379",
        name: "SpaceNavy",
      }
    ],
  },
];

export type { Faction, Category, Item, Entity };

export { resources };
