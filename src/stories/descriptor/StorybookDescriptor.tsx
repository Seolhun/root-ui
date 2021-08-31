import React from 'react';
import { H6 } from '../../components/typography';

export interface StorybookDescriptorProps {
  title: string;
}

const StorybookDescriptor: React.FC<StorybookDescriptorProps> = ({
  children,
  title,
}) => {
  return (
    <div className="mb-2">
      <H6 className="text-gray-800">{title}</H6>
      <div>{children}</div>
    </div>
  );
};

export { StorybookDescriptor };
export default StorybookDescriptor;
