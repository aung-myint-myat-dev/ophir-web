import { products } from "../../products/data/products";
import { assets } from "../../../constants";

export const projects = [
  ...products.map(({name, logo_path}) => ({ name, logo_path })),
  { name: "Start Grade Education", logo_path: assets.stargrade_logo },
  { name: "Food Burma", logo_path: assets.foodburma_logo },
  { name: "Sayar Zaw Math", logo_path: assets.sayazawmaths_logo }
];