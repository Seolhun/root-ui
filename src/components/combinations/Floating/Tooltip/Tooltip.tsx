import { TooltipProvider } from './Tooltip.Provider';
import { TooltipTrigger } from './Tooltip.Trigger';
import { TooltipContent } from './Tooltip.Content';

export const Tooltip = Object.assign(TooltipProvider, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});
