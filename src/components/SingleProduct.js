import { Link } from "react-router-dom";
const SingleProduct = ({product,customers,handleWhichBuyer,confirmBuyer,buyer})=>{
    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h2>Id: {product.id}</h2>
            <h3>Price: {product.price}</h3>
            <h3>Amount: {product.amount}</h3>
            <select id="products" onChange={(e)=>handleWhichBuyer(e.target.value)}>
                <option value={0}>None</option>
                {customers.map((e)=>(
                    <option key={e.id} value={e.id}>{e.name}</option>
                ))}
            </select>
            <br /><br />
            <button onClick={()=>{confirmBuyer(buyer)}}>Confirm</button>
            <Link to="/products">
                <button>Cancel</button>
            </Link>
                   
            {product.amount == 0 && (
                <Link to="/products">
                    <button>Go Back to Products</button>
                </Link>
            )}
        </div>
    )
}

export default SingleProduct;