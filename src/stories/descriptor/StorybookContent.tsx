import { createStorybookContentItem } from './StorybookContent.Item';
import { StorybookContentRoot } from './StorybookContent.Root';

export const StorybookContent = Object.assign(StorybookContentRoot, {
  Light: createStorybookContentItem({ className: 'bg-white' }),
  Dark: createStorybookContentItem({ className: 'dark bg-space' }),
});
