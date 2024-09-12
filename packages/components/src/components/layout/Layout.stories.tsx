import { Bars3Icon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Meta, StoryObj } from '@storybook/react/*';
import clsx from 'clsx';
import { LayoutProps } from 'framer-motion';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { Layout } from './Layout';

const BaseTemplate = ({ ...others }: LayoutProps) => {
  return (
    <Layout {...others}>
      <Layout.Header className={clsx('flex space-x-8', 'py-4 px-8', 'text-space-1 dark:text-cream-1')}>
        <Layout.Nav className={clsx('flex items-center space-x-8', 'min-h-32')}>
          <Layout.Nav.Group>
            <Layout.Nav.MenuItem>
              <Layout.ActionButton>
                {({ toggleSidebar }) => <Bars3Icon className="w-12 h-12" onClick={toggleSidebar} />}
              </Layout.ActionButton>
            </Layout.Nav.MenuItem>

            <Layout.Nav.MenuItem>Item</Layout.Nav.MenuItem>
          </Layout.Nav.Group>

          <Layout.Nav.Group>
            <Layout.Nav.MenuItem>Group Item1</Layout.Nav.MenuItem>
            <Layout.Nav.MenuItem>Group Item2</Layout.Nav.MenuItem>
            <Layout.Nav.MenuItem>Group Item3</Layout.Nav.MenuItem>
          </Layout.Nav.Group>

          <Layout.Nav.Group>
            <Layout.Nav.ExpandedItem>
              <Layout.Nav.ExpandedItem.Trigger>
                <Layout.Nav.MenuItem>Icon</Layout.Nav.MenuItem>
              </Layout.Nav.ExpandedItem.Trigger>
              <Layout.Nav.ExpandedItem.Panel>
                <Layout.Nav.MenuItem>Expanded Item</Layout.Nav.MenuItem>
              </Layout.Nav.ExpandedItem.Panel>
            </Layout.Nav.ExpandedItem>
          </Layout.Nav.Group>
        </Layout.Nav>
      </Layout.Header>

      <Layout.Sidebar
        className={clsx(
          'absolute left-0 top-0',
          'flex flex-col',
          'bg-cream-1 dark:bg-space-1',
          'h-full overflow-y-auto no-scrollbar',
          'py-12 px-8',
          'z-40',
        )}
      >
        <Layout.Sidebar.Header className={clsx('flex space-x-8', 'text-space-1 dark:text-cream-1')}>
          <Layout.ActionButton>
            {({ toggleSidebar }) => <ChevronLeftIcon className="w-12 h-12" onClick={toggleSidebar} />}
          </Layout.ActionButton>
          <h6>SideHeader</h6>
        </Layout.Sidebar.Header>

        <Layout.Sidebar.Group>
          <Layout.Sidebar.MenuItem>Item</Layout.Sidebar.MenuItem>
        </Layout.Sidebar.Group>

        <Layout.Sidebar.Group>
          <Layout.Sidebar.MenuItem>Item</Layout.Sidebar.MenuItem>

          <Layout.Sidebar.ExpandedMenuGroup isOpen>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 1-1</Layout.Sidebar.ExpandedMenuItem>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 1-2</Layout.Sidebar.ExpandedMenuItem>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 1-3</Layout.Sidebar.ExpandedMenuItem>
          </Layout.Sidebar.ExpandedMenuGroup>

          <Layout.Sidebar.ExpandedMenuGroup isOpen>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 2-1</Layout.Sidebar.ExpandedMenuItem>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 2-2</Layout.Sidebar.ExpandedMenuItem>
            <Layout.Sidebar.ExpandedMenuItem>ExpandedMenuItem 2-3</Layout.Sidebar.ExpandedMenuItem>
          </Layout.Sidebar.ExpandedMenuGroup>
        </Layout.Sidebar.Group>
      </Layout.Sidebar>

      <Layout.Body
        className={clsx(
          'pl-12 sidebar-expanded:pl-132',
          'text-space-1 dark:text-cream-1',
          'overflow-auto',
          'transition-spacing duration-200 ease-in-out',
        )}
      >
        Body
      </Layout.Body>
    </Layout>
  );
};

const LayoutStories = ({ ...others }: LayoutProps) => {
  return (
    <StorybookContent>
      <StorybookContent.Light noAlign noGap noPadding>
        <BaseTemplate {...others} />
      </StorybookContent.Light>
      <StorybookContent.Dark noAlign noGap noPadding>
        <BaseTemplate {...others} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const DisabledTags: StoryObj<LayoutProps> = {
  render: LayoutStories,
};

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
};

export default meta;
