import CustomersService from "../services/CustomersService";
import { useState } from "react";
import Customer from "../components/Customer";
import AddCustomer from "../components/AddCustomer";
import { Link } from "react-router-dom";


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

  const [newCustomer, setNewCustomer] = useState();

  const handleCustomerName = (name) => {
      setNewCustomer(name);
  };


  const handleAddCustomer = () => {
      const id = Number(customers.length) + 1;
      const newCust = { id, name: newCustomer, products:[]};
      setCustomers([...customers, newCust]);
      CustomersService.addNewCustomer(newCust);
  };

  

  return (
    <div>
      {customers.map((e) => (
        <div key={e.id}>
          <Customer name={e.name} id={e.id} customers={customers} setCustomers={setCustomers} handleDelete={handleDelete}/>
          <Link to={`/customers/${e.id}`}>Latest Purchases</Link>
          <br/><br/><br/>
        </div>
      ))}

      <AddCustomer handleAddCustomer={handleAddCustomer} handleCustomerName={handleCustomerName}/>
    </div>
  );
};

export default AppCustomers;
