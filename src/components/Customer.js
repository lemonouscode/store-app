import CustomerPage from "../pages/CustomerPage";
import { Route } from "react-router-dom";

const Customer = ({name,id,handleDelete})=>{

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Id: {id}</h2>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <Route path="/customers/:id">
                <CustomerPage id={id} />
            </Route>
            
        </div>
    )
}

export default Customer;