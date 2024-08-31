import { FormItemGroupDescription } from './FormItemGroup.Description';
import { FormItemGroupRoot } from './FormItemGroup.Root';
import { FormItemGroupTitle } from './FormItemGroup.Title';

export const FormItemGroup = Object.assign(FormItemGroupRoot, {
  Description: FormItemGroupDescription,
  Title: FormItemGroupTitle,
});
