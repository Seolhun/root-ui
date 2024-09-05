import { BreadcrumbDivider } from './Breadcrumb.\bDivider';
import { BreadcrumbItem } from './Breadcrumb.Item';
import { BreadcrumbRoot } from './Breadcrumb.Root';

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Divider: BreadcrumbDivider,
  Item: BreadcrumbItem,
});
