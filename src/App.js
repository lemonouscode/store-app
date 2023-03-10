import "./App.css";
import Navbar from "./components/Navbar";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductPage";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/customers" component={AppCustomers} />
        <Route exact path="/products" component={AppProducts} />
        <Route path="/customers/:id">
              <CustomerPage />
        </Route>
        <Route path="/products/:id">
              <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
