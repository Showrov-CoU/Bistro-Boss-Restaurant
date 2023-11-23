import {
  FaAd,
  FaCalendar,
  FaCartArrowDown,
  FaHamburger,
  FaHome,
  FaList,
  FaPaypal,
  FaPhone,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-3/12 bg-[#D1A054] h-screen">
        <div className="py-8 text-center">
          <p className="text-3xl font-bold">BISTRO BOSS</p>
          <p className="uppercase text-sm font-bold tracking-[0.6rem]">
            Restaurant
          </p>
        </div>
        <ul className="menu space-y-1 font-bold">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaPaypal></FaPaypal> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaCartArrowDown></FaCartArrowDown> My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reviews">
              <FaAd></FaAd> Add Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaList></FaList> My Bookings
            </NavLink>
          </li>
          <div className="divider divider-success"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger></FaHamburger> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaShoppingCart></FaShoppingCart> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone></FaPhone> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-9/12 bg-zinc-300 overflow-y-auto h-screen px-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
