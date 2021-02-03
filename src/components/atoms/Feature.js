import PropTypes from "prop-types";

const Feature = ({ icon, title, children }) => (
  <div>
    <div>{icon}</div>
    <h5>{title}</h5>
    <div>{children}</div>
  </div>
);

Feature.defaultProps = {
  icon: undefined,
  title: "",
  children: undefined,
};

Feature.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Feature;
