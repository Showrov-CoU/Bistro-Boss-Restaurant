import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pb-5 text-center w-3/12 mx-auto my-2">
      <p className="text-yellow-600">{subHeading}</p>
      <h1 className="text-2xl font-medium uppercase border-y-2 py-2">
        {heading}
      </h1>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
