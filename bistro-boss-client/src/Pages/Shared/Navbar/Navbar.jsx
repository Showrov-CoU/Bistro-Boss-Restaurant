import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-sm">
            <FaCartArrowDown size={20} />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/login">
              <button onClick={handleLogout} className="btn btn-sm">
                Logout
              </button>
            </Link>
          </li>
          <li>{user?.displayName}</li>
        </>
      ) : (
        <li>
          <Link to="/login">
            <button className="btn btn-sm">Login</button>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-lg mx-auto text-white bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-x-4"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BISTRO-BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-4">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get Started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
