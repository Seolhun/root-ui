import { AccordionWidgetButton } from './Accordion.Widget.Button';
import { AccordionWidgetPanel } from './Accordion.Widget.Panel';
import { AccordionWidgetRoot } from './Accordion.Widget.Root';

const Accordion = Object.assign(AccordionWidgetRoot, {
  Widgets: {
    Button: AccordionWidgetButton,
    Panel: AccordionWidgetPanel,
  },
});

export { Accordion };
export default Accordion;
