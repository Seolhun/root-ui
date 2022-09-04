import React from 'react';
import { usePopper } from 'react-popper';

import { Button, Card } from '../../atomics';
import { Icon } from '../../icons';

import Popover from './Popover';

export default {
  title: 'Combination/Popover',
  component: Popover,
};

// ----------------------------------------------------------------

const Popovers = () => {
  return (
    <section>
      <Popover className="relative mt-8">
        <Popover.Widgets.Button>
          <Button>Show Popover</Button>
        </Popover.Widgets.Button>

        <Popover.Widgets.Panel className="absolute z-10">
          <Card scale="lg" className="flex flex-col gap-y-4">
            <a className="flex items-center gap-x-2">
              <Icon icon="AcademicCapIcon" scale="lg" />
              <p>First Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AdjustmentsIcon" scale="lg" />
              <p>Second Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AnnotationIcon" scale="lg" />
              <p>Third Item</p>
            </a>
          </Card>
        </Popover.Widgets.Panel>
      </Popover>
    </section>
  );
};
export const _Popovers = Popovers.bind({});

// ----------------------------------------------------------------

const PopoversInOthers = () => {
  return (
    <section>
      <Popover className="relative mt-8">
        <Card scale="lg">
          <Popover.Widgets.Button>
            <Button>Show Popover</Button>
          </Popover.Widgets.Button>

          <Popover.Widgets.Panel className="absolute z-10">
            <Card scale="lg" className="flex flex-col gap-y-4">
              <a className="flex items-center gap-x-2">
                <Icon icon="AcademicCapIcon" scale="lg" />
                <p>First Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AdjustmentsIcon" scale="lg" />
                <p>Second Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AnnotationIcon" scale="lg" />
                <p>Third Item</p>
              </a>
            </Card>
          </Popover.Widgets.Panel>
        </Card>
      </Popover>
    </section>
  );
};
export const _PopoversInOthers = PopoversInOthers.bind({});

// ----------------------------------------------------------------

const PopoversCloseButton = () => {
  return (
    <section>
      <Popover className="relative mt-8">
        <Popover.Widgets.Button>
          <Button>Show Popover</Button>
        </Popover.Widgets.Button>

        <Popover.Widgets.Panel className="absolute z-10">
          {({ close }) => (
            <Card scale="lg" className="flex flex-col gap-y-4">
              <a className="flex items-center gap-x-2">
                <Icon icon="AcademicCapIcon" scale="lg" />
                <p>First Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AdjustmentsIcon" scale="lg" />
                <p>Second Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AnnotationIcon" scale="lg" />
                <p>Third Item</p>
              </a>
              <div className="flex items-end mt-2">
                <Button onClick={close}>Close Popover Button</Button>
              </div>
            </Card>
          )}
        </Popover.Widgets.Panel>
      </Popover>
    </section>
  );
};
export const _PopoversCloseButton = PopoversCloseButton.bind({});

// ----------------------------------------------------------------

const PopoversOverlay = () => {
  return (
    <section>
      <Card className="mt-8 h-80">The Popover over test on the Card</Card>

      <Popover className="relative mt-8">
        <Popover.Widgets.Button>
          <Button>Show Popover</Button>
        </Popover.Widgets.Button>

        <Popover.Widgets.Overlay className="fixed inset-0 bg-dark opacity-30" />
        <Popover.Widgets.Panel className="absolute z-10">
          <Card scale="lg" className="flex flex-col gap-y-4">
            <a className="flex items-center gap-x-2">
              <Icon icon="AcademicCapIcon" scale="lg" />
              <p>First Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AdjustmentsIcon" scale="lg" />
              <p>Second Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AnnotationIcon" scale="lg" />
              <p>Third Item</p>
            </a>
          </Card>
        </Popover.Widgets.Panel>
      </Popover>

      <Card className="mt-8">The Popover over test on the Card</Card>
    </section>
  );
};
export const _PopoversOverlay = PopoversOverlay.bind({});

// ----------------------------------------------------------------

const PopoverGroups = () => {
  return (
    <section>
      <Popover.Widgets.Group className="flex gap-x-4">
        <Popover className="relative mt-8">
          <Popover.Widgets.Button>
            <Button>Show Popover</Button>
          </Popover.Widgets.Button>

          <Popover.Widgets.Panel className="absolute z-10">
            <Card scale="lg" className="flex flex-col gap-y-4 w-max">
              <a className="flex items-center gap-x-2">
                <Icon icon="AcademicCapIcon" scale="lg" />
                <p>First Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AdjustmentsIcon" scale="lg" />
                <p>Second Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AnnotationIcon" scale="lg" />
                <p>Third Item</p>
              </a>
            </Card>
          </Popover.Widgets.Panel>
        </Popover>

        <Popover className="relative mt-8">
          <Popover.Widgets.Button>
            <Button>Show Popover</Button>
          </Popover.Widgets.Button>

          <Popover.Widgets.Panel className="absolute z-10">
            <Card scale="lg" className="flex flex-col gap-y-4 w-max">
              <a className="flex items-center gap-x-2">
                <Icon icon="AcademicCapIcon" scale="lg" />
                <p>First Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AdjustmentsIcon" scale="lg" />
                <p>Second Item</p>
              </a>
              <a className="flex items-center gap-x-2">
                <Icon icon="AnnotationIcon" scale="lg" />
                <p>Third Item</p>
              </a>
            </Card>
          </Popover.Widgets.Panel>
        </Popover>
      </Popover.Widgets.Group>
      <Card className="mt-8">The Popover over test on the Card</Card>
    </section>
  );
};
export const _PopoverGroups = PopoverGroups.bind({});

// ----------------------------------------------------------------

const PopoversPositionWithPopper = ({ placement }) => {
  const [referenceElement, setReferenceElement] = React.useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  return (
    <section style={{ height: '2000px' }}>
      <Card className="mt-8 h-80">The Popover over test on the Card</Card>

      <Card className="mt-8 h-80">The Popover over test on the Card</Card>

      <Popover className="relative mt-8">
        <Popover.Widgets.Button ref={setReferenceElement}>
          <Button>Show Popover</Button>
        </Popover.Widgets.Button>

        <Popover.Widgets.Panel
          {...attributes.popper}
          ref={setPopperElement}
          style={styles.popper}
          className="absolute z-10"
        >
          <Card scale="lg" className="flex flex-col gap-y-4">
            <a className="flex items-center gap-x-2">
              <Icon icon="AcademicCapIcon" scale="lg" />
              <p>First Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AdjustmentsIcon" scale="lg" />
              <p>Second Item</p>
            </a>
            <a className="flex items-center gap-x-2">
              <Icon icon="AnnotationIcon" scale="lg" />
              <p>Third Item</p>
            </a>
          </Card>
        </Popover.Widgets.Panel>
      </Popover>

      <Card className="mt-8">The Popover over test on the Card</Card>
    </section>
  );
};
export const _PopoversPositionWithPopper = PopoversPositionWithPopper.bind({});
// @ts-ignore
_PopoversPositionWithPopper.argTypes = {
  placement: {
    defaultValue: 'bottom-start',
    control: {
      type: 'select',
      options: [
        'top-start',
        'top-end',
        'bottom-start',
        'bottom-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
        'top',
        'bottom',
        'right',
        'left',
      ],
    },
  },
};

// ----------------------------------------------------------------
