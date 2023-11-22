import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddtoCart = () => {
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch specific user data
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Food" className="rounded-xl" />
      </figure>
      <p className="text-white bg-slate-900 absolute right-0 mr-3 mt-3 px-5 py-1 rounded-md">
        $ {price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddtoCart}
            className="btn btn-outline text-orange-600 border-0 border-b-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FoodCard;
