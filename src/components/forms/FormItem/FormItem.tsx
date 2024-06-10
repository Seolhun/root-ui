import { FormHelp } from './FormHelp';
import { FormItemRoot } from './FormItemRoot';
import { FormLabel } from './FormLabel';

export const FormItem = Object.assign(FormItemRoot, {
  Help: FormHelp,
  Label: FormLabel,
});
