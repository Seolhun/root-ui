import { Tab } from './Tab';
import { TabGroup } from './Tab.Group';
import { TabList } from './Tab.List';
import { TabPanel } from './Tab.Panel';
import { TabPanels } from './Tab.Panels';

export const Tabs = Object.assign(TabGroup, {
  List: TabList,
  Panel: TabPanel,
  PanelList: TabPanels,
  Tab: Tab,
});
