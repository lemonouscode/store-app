import "./App.css";
import Navbar from "./components/Navbar";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
