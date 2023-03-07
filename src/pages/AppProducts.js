import { useState } from "react";
import ProductService from "../services/ProductService";
import ListingProducts from "../components/ListingProducts";

const AppProducts = () => {

  const [products, setProducts] = useState(ProductService.getAll())

  return (
    <ListingProducts products={products} />
  )
};

export default AppProducts;
