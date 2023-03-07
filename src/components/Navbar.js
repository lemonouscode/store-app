import { Link } from "react-router-dom"; 


const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/customers">Customers</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
    </nav>
  );
};

export default Navbar;
