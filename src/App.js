import "./App.css";
import Navbar from "./components/Navbar";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/customers" component={AppCustomers} />
        <Route path="/products" component={AppProducts} />
      </Switch>
    </div>
  );
}

export default App;
