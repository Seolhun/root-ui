import { FormDescription } from './FormDescription';
import { FormHelp } from './FormHelp';
import { FormItemRoot } from './FormItemRoot';
import { FormLabel } from './FormLabel';
import { Required } from './Required';

export const FormItem = Object.assign(FormItemRoot, {
  Description: FormDescription,
  Help: FormHelp,
  Label: FormLabel,
  Required: Required,
});
