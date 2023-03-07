const SingleCustomer = ({myCustomer})=>{
    return (
        <div >
            {myCustomer &&
            <div>
                <h1>Name: {myCustomer.name}</h1>
                <h2>Id: {myCustomer.id}</h2>
                <div>
                    {myCustomer.products.map((e,index)=>(
                        <p key={index}>{e}</p>
                    ))}
                </div>
            </div>
            }
            <h1>{myCustomer.name}</h1>
        </div>
        
    )
}

export default SingleCustomer;