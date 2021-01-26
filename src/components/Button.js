import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};
const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;

    case ButtonColors.danger:
      return theme.colors.danger.main;

    default:
      return "#e0e0e0";
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;

    case ButtonColors.danger:
      return theme.colors.danger.dark;

    default:
      return "#5a6268";
  }
};
const getColorText = (props) => props.theme.colors.text;

const getOutlinedText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#212121";
  }

  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

// Utilizando herança com styled-components
//! Basicamente estou criando um estilo a partir do estilo do componente em parenteses.
const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  //? Aplique hover apenas se o componente estiver habilitado.
  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

// ? Em resumo a depender da variante irá retornar um componente diferente.
const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;

    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
