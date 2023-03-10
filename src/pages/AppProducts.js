import { useState } from "react";
import ProductService from "../services/ProductService";
import ListingProducts from "../components/ListingProducts";

const AppProducts = () => {

  const [products, setProducts] = useState(ProductService.getAll())
  const [productName, setProductName] = useState();
  const [foundProduct, setFoundProduct] = useState(products);
  

  const handleProductName = (name)=>{
    setProductName(name); 
  }

  const handleShowProduct = ()=>{
    const filtered = products.find((e)=>e.name == productName);
    
    if(filtered){
      setFoundProduct(filtered);
    }
    else{
      setFoundProduct(products)
    }
  }

  const handleDecreament = (id)=>{
    const toMinus = ProductService.decrementProduct(id);
    
    setProducts(toMinus)
  }

  const handleIncrement = (id)=>{
    const toPlus = ProductService.incrementProduct(id);
    
    setProducts(toPlus)
  }

  return (
    <ListingProducts 
      products={products} 
      handleProductName={handleProductName} 
      handleShowProduct={handleShowProduct} 
      foundProduct={foundProduct}
      handleDecreament={handleDecreament}
      handleIncrement={handleIncrement}
      />
  )
};

export default AppProducts;
