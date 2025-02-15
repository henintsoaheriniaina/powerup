import { CATEGORYTYPE } from "@/constants/categories";
import { PRODUCTS } from "@/constants/products";
import HorizontalGrid from "./HorizontalGrid";
type PROPS = {
  category: CATEGORYTYPE;
};
const CategoriesProducts = ({ category }: PROPS) => {
  const products = PRODUCTS.filter((p) => p.category === category.slug);
  return (
    <HorizontalGrid
      link={category.slug}
      title={category.name}
      products={products}
      count={products.length}
    />
  );
};
export default CategoriesProducts;
