import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonsVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

//! Functions para pegar os valores de cores com suas tratativas a depender do tema, cor e tipo.
// ? Isso é feito pois o código irá se repetir muitas vezes, portanto é mais adequado reutilizar.

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

const getLinkText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575";
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

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

// ? Em resumo a depender da variante irá retornar um componente diferente.
const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonsVariants.outlined:
      return <ButtonOutlined {...props} />;

    case ButtonsVariants.link:
      return <ButtonLink {...props} />;

    default:
      return <Button {...props} />;
  }
};

// ? Define valores padrões para o caso do componente ser inicializado sem setar alguma prop.
ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

// Definir o tipo de atributo que o componente pode receber.
// ? oneOf() significa que o valor pode ser um dos que forem setados.
// ? Object.values retorna todos os valores das propriedades de um objeto.
ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonsVariants)),
};

export default ButtonWrapper;
