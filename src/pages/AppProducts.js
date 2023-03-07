import { useState } from "react";
import ProductService from "../services/ProductService";
import ListingProducts from "../components/ListingProducts";

const AppProducts = () => {

  const [products] = useState(ProductService.getAll())
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



  return (
    <ListingProducts products={products} handleProductName={handleProductName} handleShowProduct={handleShowProduct} foundProduct={foundProduct}/>
  )
};

export default AppProducts;
