import PropTypes from "prop-types";

import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="Food"
      strength={-200}
    >
      <div className="hero h-[420px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-8/12 h-52 hero-content text-center text-neutral-content bg-[#15151563]">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  img: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default Cover;
