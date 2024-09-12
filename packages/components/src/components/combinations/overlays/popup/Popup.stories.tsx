import { StoryFn, StoryObj } from '@storybook/react';
import clsx from 'clsx';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { PopupGroup } from './PopupGroup';
import { PopupGroupPanelProps } from './PopupGroup.Panel';
import { usePopup } from './usePopup';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
type BaseTemplateProps = ElementProps & PopupGroupPanelProps;

const BaseTemplate = ({ ...others }: BaseTemplateProps) => {
  const { openPopup } = usePopup();
  return (
    <>
      <PopupGroup.Overlay {...others}>
        <PopupGroup.Backdrop />
        <PopupGroup.Panel>
          {({ popups }) => {
            return popups.map((popup) => (
              <PopupGroup.Popup
                {...popup}
                key={popup.id}
                className={clsx('flex flex-col gap-4', 'rounded shadow', 'py-4 px-6')}
              >
                <PopupGroup.Popup.Title>{popup.title}</PopupGroup.Popup.Title>
                <PopupGroup.Popup.Message>{popup.message}</PopupGroup.Popup.Message>
                <div className="flex items-center justify-end gap-2">
                  <PopupGroup.Popup.ConfirmButton onClick={popup.onConfirm}>
                    {popup.confirmText}
                  </PopupGroup.Popup.ConfirmButton>
                  <PopupGroup.Popup.CancelButton onClick={popup.onCancel}>
                    {popup.cancelText}
                  </PopupGroup.Popup.CancelButton>
                </div>
              </PopupGroup.Popup>
            ));
          }}
        </PopupGroup.Panel>
      </PopupGroup.Overlay>

      <div>
        <button
          className="p-2 text-white bg-blue-500 rounded-md"
          onClick={() => {
            openPopup({
              id: 'OpenPopup',
              message: 'Hello World',
              onCancel: () => {
                console.debug('Cancel');
              },
              onConfirm: () => {
                console.debug('Confirm');
              },
              title: 'Title',
            });
          }}
        >
          Open Popup
        </button>
      </div>
    </>
  );
};

const PopupTemplate: StoryFn<BaseTemplateProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <StorybookContent.Light className="relative" noAlign noGap noPadding>
        <PopupGroup>
          <BaseTemplate {...others} />
        </PopupGroup>
      </StorybookContent.Light>
      <StorybookContent.Dark className="relative" noAlign noGap noPadding>
        <PopupGroup>
          <BaseTemplate {...others} />
        </PopupGroup>
      </StorybookContent.Dark>
    </StorybookContent>
  );
};

export const Popups: StoryObj<BaseTemplateProps> = {
  args: {
    zIndex: 50,
  },
  render: (args) => {
    return (
      <div>
        <PopupTemplate {...args} />
        HelloWorld
      </div>
    );
  },
};

export default {
  component: PopupGroup,
  title: 'Combination/Popup',
};
