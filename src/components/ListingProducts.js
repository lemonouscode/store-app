const ListingProducts = ({handleProductName, handleShowProduct , foundProduct})=>{


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
                <h2>{e.price}</h2>
            </div>
        ))
        :
        <div key={foundProduct.id}>
            <h1>{foundProduct.name}</h1>
            <h2>{foundProduct.price}</h2>
        </div>
        }

        
        </div>
    )
}

export default ListingProducts