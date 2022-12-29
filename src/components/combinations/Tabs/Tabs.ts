import { TabGroup } from './Tab.Group';
import { TabList } from './Tab.List';
import { TabPanels } from './Tab.Panels';
import { TabPanel } from './Tab.Panel';
import { Tab } from './Tab';

export const Tabs = Object.assign(TabGroup, {
  List: TabList,
  Tab: Tab,
  PanelList: TabPanels,
  Panel: TabPanel,
});
