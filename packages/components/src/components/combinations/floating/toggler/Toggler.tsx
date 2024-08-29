import { TogglerContent } from './Toggler.Content';
import { TogglerRoot } from './Toggler.Root';
import { TogglerTrigger } from './Toggler.Trigger';

export const Toggler = Object.assign(TogglerRoot, {
  Content: TogglerContent,
  Trigger: TogglerTrigger,
});
