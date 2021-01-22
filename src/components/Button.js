import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: #ffc107;
  border: 2px solid #ffc107;
  color: #212121;
`;

Button.defaultProps = {
  type: "button",
  children: undefined,
};

Button.prototypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
