import { AccordionButton } from './Accordion.Button';
import { AccordionPanel } from './Accordion.Panel';
import { AccordionRoot } from './Accordion.Root';

export const Accordion = Object.assign(AccordionRoot, {
  Button: AccordionButton,
  Panel: AccordionPanel,
});
