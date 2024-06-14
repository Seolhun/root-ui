import { AcademicCapIcon, BookmarkIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import * as React from 'react';
import { usePopper } from 'react-popper';

import { Button, Card } from '../../../components/atomics';
import { storiesPlacements, StorybookContent } from '../../../stories';
import { Popover } from './Popover';

export default {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    placement: {
      control: {
        type: 'select',
        defaultValue: 'bottom-start',
        options: storiesPlacements,
      },
    },
  },
  component: Popover,
  title: 'Combination/Popover',
};

const PopoversTemplate = () => {
  return (
    <Popover className="relative mt-8">
      <Popover.Button>
        <Button>Show Popover</Button>
      </Popover.Button>

      <Popover.Panel className={clsx('absolute z-10')}>
        <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
          <AcademicCapIcon />
          <p>First Item</p>
        </a>
        <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
          <BookmarkIcon />
          <p>Second Item</p>
        </a>
        <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
          <RocketLaunchIcon />
          <p>Third Item</p>
        </a>
      </Popover.Panel>
    </Popover>
  );
};

const Popovers = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign>
        <PopoversTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign>
        <PopoversTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const _Popovers = Popovers.bind({});

const PopoversCloseButtonTemplate = () => {
  return (
    <Popover className="relative mt-8">
      <Popover.Button>
        <Button>Show Popover</Button>
      </Popover.Button>

      <Popover.Panel className={clsx('absolute z-10')}>
        {({ close }) => (
          <div>
            <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
              <AcademicCapIcon />
              <p>First Item</p>
            </a>
            <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
              <BookmarkIcon />
              <p>Second Item</p>
            </a>
            <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
              <RocketLaunchIcon />
              <p>Third Item</p>
            </a>
            <div className="flex items-end mt-2">
              <Button onClick={() => close()}>Close Popover Button</Button>
            </div>
          </div>
        )}
      </Popover.Panel>
    </Popover>
  );
};
const PopoversCloseButton = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign>
        <PopoversCloseButtonTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign>
        <PopoversCloseButtonTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const _PopoversCloseButton = PopoversCloseButton.bind({});

const PopoversOverlayTemplate = () => {
  return (
    <>
      <Card className="mt-8 min-h-180">The Popover over test on the Card</Card>
      <Popover className="relative mt-8">
        <Popover.Button>
          <Button>Show Popover</Button>
        </Popover.Button>

        <Popover.Overlay className="fixed inset-0 bg-dark opacity-30" />
        <Popover.Panel className={clsx('absolute z-10')}>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <AcademicCapIcon />
            <p>First Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <BookmarkIcon />
            <p>Second Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <RocketLaunchIcon />
            <p>Third Item</p>
          </a>
        </Popover.Panel>
      </Popover>
      <Card className="mt-8">The Popover over test on the Card</Card>
    </>
  );
};

const PopoversOverlay = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign>
        <PopoversOverlayTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign>
        <PopoversOverlayTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const _PopoversOverlay = PopoversOverlay.bind({});

const PopoverGroupTemplate = () => {
  return (
    <Popover.Group className="flex gap-x-4">
      <Popover className="relative mt-8">
        <Popover.Button>
          <Button>Show Popover</Button>
        </Popover.Button>

        <Popover.Panel className={clsx('absolute z-10 min-w-100')}>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <AcademicCapIcon />
            <p>First Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <BookmarkIcon />
            <p>Second Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <RocketLaunchIcon />
            <p>Third Item</p>
          </a>
        </Popover.Panel>
      </Popover>

      <Popover className="relative mt-8">
        <Popover.Button>
          <Button>Show Popover</Button>
        </Popover.Button>

        <Popover.Panel className={clsx('absolute z-10 min-w-100')}>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <AcademicCapIcon />
            <p>First Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <BookmarkIcon />
            <p>Second Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <RocketLaunchIcon />
            <p>Third Item</p>
          </a>
        </Popover.Panel>
      </Popover>
    </Popover.Group>
  );
};

const PopoverGroups = () => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign>
        <PopoverGroupTemplate />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign>
        <PopoverGroupTemplate />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const _PopoverGroups = PopoverGroups.bind({});

const PopoversPositionWithPopperTemplate = ({ placement }) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const { attributes, styles } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement,
  });

  return (
    <section className="w-full" style={{ minHeight: '2000px' }}>
      <Card className="mt-8 min-h-180">The Popover over test on the Card</Card>
      <Card className="mt-8 min-h-180">The Popover over test on the Card</Card>
      <Popover className="relative mt-8">
        <Popover.Button ref={setReferenceElement}>
          <Button>Show Popover</Button>
        </Popover.Button>

        <Popover.Panel {...attributes.popper} className="absolute z-10" ref={setPopperElement} style={styles.popper}>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <AcademicCapIcon />
            <p>First Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <BookmarkIcon />
            <p>Second Item</p>
          </a>
          <a className="flex items-center gap-x-2 scale-p-md hover:bg-dark-2 cursor-pointer py-1 px-2 rounded">
            <RocketLaunchIcon />
            <p>Third Item</p>
          </a>
        </Popover.Panel>
      </Popover>
      <Card className="mt-8">The Popover over test on the Card</Card>
    </section>
  );
};

const PopoversPositionWithPopper = ({ placement }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="flex flex-col" noAlign>
        <PopoversPositionWithPopperTemplate placement={placement} />
      </StorybookContent.Light>
      <StorybookContent.Dark className="flex flex-col" noAlign>
        <PopoversPositionWithPopperTemplate placement={placement} />
      </StorybookContent.Dark>
    </StorybookContent>
  );
};
export const _PopoversPositionWithPopper = PopoversPositionWithPopper.bind({});
