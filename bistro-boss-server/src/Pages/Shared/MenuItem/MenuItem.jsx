import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[110px]"
        style={{ borderRadius: "0px 300px 300px 300px" }}
        src={image}
        alt=""
      />
      <div>
        <h1 className="uppercase">{name}------------</h1>
        <p className="text-justify">{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuItem;
