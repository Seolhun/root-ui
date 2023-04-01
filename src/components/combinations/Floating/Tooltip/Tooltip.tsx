import { TooltipContent } from './Tooltip.Content';
import { TooltipRoot } from './Tooltip.Root';
import { TooltipTrigger } from './Tooltip.Trigger';

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
