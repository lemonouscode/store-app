import { useState } from "react";

const AddCustomer = ()=>{


    const [newCustomer, setNewCustomer] = useState();

    const handleCustomerName = (name) => {
        setNewCustomer(name);
    };

    const handleAddCustomer = () => {
        const id = Number(customers.length) + 1;
        const newCust = { id, name: newCustomer };
        setCustomers([...customers, newCust]);
        CustomersService.addNewCustomer(newCust);
    };


    return (
        <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="cust">Customer Name</label>
        <input
          name="cust"
          onChange={(e) => handleCustomerName(e.target.value)}
          type="text"
        />
        <button onClick={handleAddCustomer}>Add</button>
      </form>
    )
}

export default AddCustomer;