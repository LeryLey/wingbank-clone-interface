import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ContentInformation = ({ title, img, txt, path }) => {
  return (
    <article className="w-60 text-center space-y-3">
      <h2 className="text-main font-bold uppercase text-xl">{title}</h2>
      <div className="w-full h-40 rounded-md overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover hover:scale-[1.1] duration-300" />
      </div>
      <p className="text-gray-500 text-base w-52">{txt}</p>
      <Link to={path}>
        <button className="outline-none uppercase border-2 border-blue px-5 py-1 hover:px-7 rounded-full text-blue hover:text-white text-base font-medium bg-transparent hover:bg-blue duration-300 mt-3">
          read more
        </button>
      </Link>
    </article>
  );
};

ContentInformation.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

ContentInformation.defaultProps = {
  title: "Default Title",
  img: "default-image.jpg",
  txt: "Default text",
  path: "/default-path",
};

export default ContentInformation;

