import { XMarkIcon } from '@heroicons/react/24/outline';
import { StoryFn, StoryObj } from '@storybook/react';
import * as React from 'react';

import { StorybookContent } from '~/stories';

import { ToastGroup } from './ToastGroup';
import { ToastGroupPanelProps } from './ToastGroup.Panel';
import { useToast } from './useToast';

type ElementType = HTMLDivElement;
type ElementProps = React.HTMLAttributes<ElementType>;
type BaseTemplateProps = ElementProps & ToastGroupPanelProps;

const BaseTemplate = ({ ...others }: BaseTemplateProps) => {
  const { openToast } = useToast();
  return (
    <>
      <ToastGroup.Panel {...others}>
        {({ toasts }) => (
          <div className="flex flex-col space-y-4">
            {toasts.map((toast) => (
              <ToastGroup.Toast key={toast.id} {...toast}>
                <div className="flex items-start space-x-4">
                  <ToastGroup.Toast.Title>{toast.title}</ToastGroup.Toast.Title>
                  <ToastGroup.Toast.CloseButton toastId={toast.id}>
                    <XMarkIcon className="size-8" />
                  </ToastGroup.Toast.CloseButton>
                </div>
                <ToastGroup.Toast.Message>{toast.message}</ToastGroup.Toast.Message>
              </ToastGroup.Toast>
            ))}
          </div>
        )}
      </ToastGroup.Panel>

      <div>
        <button
          className="p-2 text-white bg-blue-500 rounded"
          onClick={() => openToast({ message: 'Hello World', timeout: 10000, title: 'Title' })}
        >
          Open Toast
        </button>
      </div>
    </>
  );
};

const ToastTemplate: StoryFn<BaseTemplateProps> = ({ ...others }) => {
  return (
    <StorybookContent>
      <ToastGroup>
        <StorybookContent.Light className="relative" noAlign noGap noPadding>
          <BaseTemplate {...others} />
        </StorybookContent.Light>
      </ToastGroup>
      <ToastGroup>
        <StorybookContent.Dark className="relative" noAlign noGap noPadding>
          <BaseTemplate {...others} />
        </StorybookContent.Dark>
      </ToastGroup>
    </StorybookContent>
  );
};

export const Toasts: StoryObj<BaseTemplateProps> = {
  args: {
    placement: 'top-right',
    zIndex: 50,
  },
  render: (args) => {
    return (
      <ToastGroup>
        <ToastTemplate {...args} />
        HelloWorld
      </ToastGroup>
    );
  },
};

export default {
  component: ToastGroup,
  title: 'Combination/Toast',
};
