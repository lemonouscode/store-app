import CustomersService from "../services/CustomersService";
import { useState } from "react";

const AppCustomers = () => {
  const [customers, setCustomers] = useState(CustomersService.getAll());

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
      {customers.map((e) => (
        <div key={e.id}>
          <h1>Name: {e.name}</h1>
          <h2>Id: {e.id}</h2>
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AppCustomers;
