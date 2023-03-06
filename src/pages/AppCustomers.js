import CustomersService from "../services/CustomersService";
import { useState } from "react";
import Customer from "../components/Customer";
import AddCustomer from "../components/AddCustomer";

const AppCustomers = () => {
  
  const [customers, setCustomers] = useState(CustomersService.getAll());

  

  return (
    <div>
      {customers.map((e) => (
          <Customer key={e.id} name={e.name} id={e.id} customers={customers} setCustomers={setCustomers}/>
      ))}

      <AddCustomer />
    </div>
  );
};

export default AppCustomers;
