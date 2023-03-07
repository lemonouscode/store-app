import { useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import ProductService from "../services/ProductService";
import CustomersService from "../services/CustomersService";
import SingleProduct from "../components/SingleProduct";

const ProductPage = ()=>{

    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState(ProductService.singleProduct(id))
    const [customers, setCustomers] = useState(CustomersService.getAll());
    const [buyer, setBuyer] = useState(0);


    const handleWhichBuyer = (id)=>{
        setBuyer(id);
    }

    const confirmBuyer = (buyerId)=>{
        if(buyerId == 0){
            alert("Kupac nije selektovan, odaberite kupca");
            return;
        }

        const toMinus = ProductService.decrementProduct(id);
        const updatedCustomer = toMinus.find((e)=> e.id == id);

        setProduct(prevProduct => ({ ...prevProduct, amount: updatedCustomer.amount }));
        
        CustomersService.boughtNewItem(buyerId,product)
        
    }
    //product,customers,handleWhichBuyer,confirmBuyer,buyer
    return (
        <SingleProduct 
            product={product }
            customers={customers}
            handleWhichBuyer={handleWhichBuyer}
            confirmBuyer={confirmBuyer}
            buyer={buyer}
        />
    )
}

export default ProductPage;