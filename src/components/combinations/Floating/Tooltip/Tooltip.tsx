import { TooltipRoot } from './Tooltip.Root';
import { TooltipTrigger } from './Tooltip.Trigger';
import { TooltipContent } from './Tooltip.Content';

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
