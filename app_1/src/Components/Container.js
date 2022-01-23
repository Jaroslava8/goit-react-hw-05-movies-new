import propTypes from "prop-types";

export default function Container({ children }) {
  return <div>{children}</div>;
}

Container.propTypes = {
  children: propTypes.array.isRequired,
};
