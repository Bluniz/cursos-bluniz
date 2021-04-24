import PropTypes from "prop-types";
import { Children, cloneElement, useState } from "react";

const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);

  return Children.map(children, (child, childIndex) =>
    cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setIndex(-1);
        } else {
          setIndex(childIndex);
        }
      },
    })
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  childrem: PropTypes.node,
};

export default AccordionGroup;
