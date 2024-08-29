import { DisclosureButton } from './Disclosure.Button';
import { DisclosurePanel } from './Disclosure.Panel';
import { DisclosureRoot } from './Disclosure.Root';

export const Disclosure = Object.assign(DisclosureRoot, {
  Button: DisclosureButton,
  Panel: DisclosurePanel,
});
