import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex space-x-10 ">
      <Link to="/" className="hover:underline">
        Home
      </Link>

      <Link to="/about" className="hover:underline">
        About
      </Link>
      
      <Link to="/contact" className="hover:underline">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
