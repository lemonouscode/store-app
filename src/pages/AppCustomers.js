import CustomersService from "../services/CustomersService";
import { useState } from "react";

const AppCustomers = () => {
  const [customers, setCustomers] = useState(CustomersService.getAll());
  const [newCustomer, setNewCustomer] = useState();

  const handleDelete = (id) => {
    const isDeleted = CustomersService.delete(id);
    if (isDeleted) {
      const deletedCustomers = customers.filter((e) => {
        return e.id !== id;
      });
      setCustomers(deletedCustomers);
    }
  };

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
    <div>
      {customers.map((e) => (
        <div key={e.id}>
          <h1>Name: {e.name}</h1>
          <h2>Id: {e.id}</h2>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}

      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="cust">Customer Name</label>
        <input
          name="cust"
          onChange={(e) => handleCustomerName(e.target.value)}
          type="text"
        />
        <button onClick={handleAddCustomer}>Add</button>
      </form>
    </div>
  );
};

export default AppCustomers;
