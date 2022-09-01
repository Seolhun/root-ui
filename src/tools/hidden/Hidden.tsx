import { ElementType, Ref } from 'react';

import { RootUIProps } from '@/types';
import { forwardRefWithAs, render } from '@/core';

const DEFAULT_VISUALLY_HIDDEN_TAG = 'div' as const;

export enum HiddenFeatures {
  // The default, no features.
  None = 1 << 0,
  // Whether the element should be focusable or not.
  Focusable = 1 << 1,
  // Whether it should be completely hidden, even to assistive technologies.
  Hidden = 1 << 2,
}

export const Hidden = forwardRefWithAs(function VisuallyHidden<
  Tag extends ElementType = typeof DEFAULT_VISUALLY_HIDDEN_TAG,
>(props: RootUIProps<Tag> & { features?: HiddenFeatures }, ref: Ref<HTMLElement>) {
  const { features = HiddenFeatures.None, ...theirProps } = props;
  const ourProps = {
    ref,
    'aria-hidden': (features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable ? true : undefined,
    style: {
      position: 'fixed',
      top: 1,
      left: 1,
      width: 1,
      height: 0,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
      ...((features & HiddenFeatures.Hidden) === HiddenFeatures.Hidden &&
        !((features & HiddenFeatures.Focusable) === HiddenFeatures.Focusable) && { display: 'none' }),
    },
  };

  return render({
    ourProps,
    theirProps,
    slot: {},
    defaultTag: DEFAULT_VISUALLY_HIDDEN_TAG,
    name: 'Hidden',
  });
});
