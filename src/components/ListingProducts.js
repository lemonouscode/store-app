import {Link} from "react-router-dom";
const ListingProducts = ({handleProductName, handleShowProduct , foundProduct, handleDecreament, handleIncrement})=>{


    return (
        <div>
        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
            <label htmlFor="">Find Product</label>
            <input type="text" onChange={(e)=>handleProductName(e.target.value)} />
            <button onClick={handleShowProduct}>Find</button>
        </form>

        {foundProduct.length > 1 ? foundProduct.map((e)=>(
            <div key={e.id}>
                <h1>{e.name}</h1>
                <h2>Price: {e.price}</h2>
                <div><span onClick={()=>handleDecreament(e.id)}>-</span> Amount:  {e.amount} <span onClick={()=>handleIncrement(e.id)}>+</span></div>
                <Link to={`/products/${e.id}`}>Buy</Link>
            </div>
        ))
        :
        <div key={foundProduct.id}>
            <h1>{foundProduct.name}</h1>
            <h2>Price: {foundProduct.price}</h2>
            <h3>
                <button onClick={()=>handleDecreament(foundProduct.id)}>-</button> 
                    Amount: {foundProduct.amount} 
                <span onClick={()=>handleIncrement(foundProduct.id)}>+</span></h3>
                <Link to={`/products/${e.id}`}>Buy</Link>
        </div>
        }

        
        </div>
    )
}

export default ListingProducts