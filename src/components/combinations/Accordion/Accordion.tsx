import { AccordionWidgetRoot } from './Accordion.Widget.Root';
import { AccordionWidgetButton } from './Accordion.Widget.Button';

import { AccordionWidgetPanel } from './Accordion.Widget.Panel';

const Accordion = Object.assign(AccordionWidgetRoot, {
  Widgets: {
    Button: AccordionWidgetButton,
    Panel: AccordionWidgetPanel,
  },
});

export { Accordion };
export default Accordion;
