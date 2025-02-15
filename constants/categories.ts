export const CATEGORIES = [
  {
    name: "Souris",
    slug: "souris",
    image: require("../assets/images/products/s1.jpg"),
  },
  {
    name: "Claviers",
    slug: "claviers",
    image: require("../assets/images/products/c1.jpg"),
  },
  {
    name: "Casques",
    slug: "casques",
    image: require("../assets/images/products/ca3.jpg"),
  },
  {
    name: "Manettes",
    slug: "manettes",
    image: require("../assets/images/products/m1.jpg"),
  },
  {
    name: "Cartes mères",
    slug: "carte_meres",
    image: require("../assets/images/products/cm1.jpg"),
  },
  {
    name: "Processeurs",
    slug: "processeurs",
    image: require("../assets/images/products/proc1.jpg"),
  },
  {
    name: "Cartes graphiques",
    slug: "carte_graphiques",
    image: require("../assets/images/products/graph1.jpg"),
  },
  {
    name: "Ssds",
    slug: "ssds",
    image: require("../assets/images/products/ssd1.jpg"),
  },
  {
    name: "Rams",
    slug: "rams",
    image: require("../assets/images/products/ram1.jpg"),
  },
];
export type CATEGORYTYPE = (typeof CATEGORIES)[number];
