import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CustomersService from "../services/CustomersService";
import SingleCustomer from "../components/SingleCustomer";

const CustomerPage = ()=>{

    const { id } = useParams();
    const history = useHistory();
    const [myCustomer, setMyCustomer] = useState(CustomersService.singleCustomer(id));
    

    console.log(CustomersService.singleCustomer(id));

    const handleUserFetch = () => {
        setMyCustomer(CustomersService.singleCustomer(id));
        if (!myCustomer) { 
            history.push("/customers");
            return;
        }
    };


    useEffect(() => {
        handleUserFetch();
    },[id]);

    

    return (
        <div>
            <SingleCustomer myCustomer={myCustomer} />
        </div>
    )
}

export default CustomerPage;