import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como renovo meu bootcamp?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
    <Accordion title="Como faço a mudança de bootcamp?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
    <Accordion title="Não conclui no periodo, e agora?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como renovo meu bootcamp?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
    <Accordion title="Como faço a mudança de bootcamp?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
    <Accordion title="Não conclui no periodo, e agora?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sunt
      voluptas porro recusandae deleniti re
    </Accordion>
  </AccordionGroup>
);
