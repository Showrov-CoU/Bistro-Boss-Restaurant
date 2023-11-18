import PropTypes from "prop-types";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title, subtitle }) => {
  return (
    <div className="mb-10">
      {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="w-fit mx-auto mt-5">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline w-fit mx-auto border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  img: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default MenuCategory;
