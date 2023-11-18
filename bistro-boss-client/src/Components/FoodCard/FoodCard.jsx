import PropTypes from "prop-types";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
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
          <button className="btn btn-outline text-orange-600 border-0 border-b-4">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FoodCard;
