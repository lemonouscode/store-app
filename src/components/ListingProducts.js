const ListingProducts = ({products})=>{
    return (
        <div>
        {products.map((e)=>(
            <div key={e.id}>
                <h1>{e.name}</h1>
                <h2>{e.price}</h2>
            </div>
        ))}
        </div>
    )
}

export default ListingProducts