const Customer = ({name,id,customers,setCustomers})=>{

    const handleDelete = (id) => {
        const isDeleted = CustomersService.delete(id);
        if (isDeleted) {
            const deletedCustomers = customers.filter((e) => {
            return e.id !== id;
            });
            setCustomers(deletedCustomers);
        }
    };

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Id: {id}</h2>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default Customer;