import { ElementType, Ref } from 'react';

import { forwardRefWithAs, render } from '~/core';
import { RootUIProps } from '~/types';

const DEFAULT_VISUALLY_HIDDEN_TAG = 'div' as const;

export enum HiddenFeatures {
  // Whether the element should be focusable or not.
  Focusable = 1 << 1,
  // Whether it should be completely hidden, even to assistive technologies.
  Hidden = 1 << 2,
  // The default, no features.
  None = 1 << 0,
}

const _Hidden = <Tag extends ElementType = typeof DEFAULT_VISUALLY_HIDDEN_TAG>(
  props: RootUIProps<Tag> & { features?: HiddenFeatures },
  ref: Ref<HTMLElement>,
) => {
  const { features = HiddenFeatures.None, ...theirProps } = props;
  const ourProps = {
    'aria-hidden': (features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable ? true : undefined,
    ref,
    style: {
      borderWidth: '0',
      clip: 'rect(0, 0, 0, 0)',
      height: 0,
      left: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'fixed',
      top: 1,
      whiteSpace: 'nowrap',
      width: 1,
      ...((features & HiddenFeatures.Hidden) === HiddenFeatures.Hidden &&
        !((features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable) && { display: 'none' }),
    },
  };

  return render({
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: 'Hidden',
    ourProps,
    slot: {},
    theirProps,
  });
};

export const Hidden = forwardRefWithAs(_Hidden);
