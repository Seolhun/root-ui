import * as React from 'react';

import { forwardRefWithAs, render } from '~/core';
import {
  TabDirection,
  useEvent,
  useOwnerDocument,
  useServerHandoffComplete,
  useSyncRefs,
  useTabDirection,
} from '~/hooks';
import { Hidden, HiddenFeatures } from '~/tools/hidden';
import { RootUIProps, RootUIReactTag } from '~/types';
import { match } from '~/utils';

import { Focus, focusIn } from './FocusManagements';
import { useFocusLock } from './useFocusLock';
import { useInitialFocus } from './useInitialFocus';
import { useRestoreFocus } from './useRestoreFocus';

export interface FocusTrapProps {
  containers?: React.MutableRefObject<Set<React.MutableRefObject<HTMLElement | null>>>;
  features?: Features;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
}

const DEFAULT_FOCUS_TRAP_TAG: RootUIReactTag = 'div';

enum Features {
  /** Enable all features. */
  All = InitialFocus | TabLock | FocusLock | RestoreFocus,
  /** Ensure that programmatically moving focus outside of the container is disallowed. */
  FocusLock = 1 << 3,
  /** Ensure that we move focus initially into the container. */
  InitialFocus = 1 << 1,
  /** No features enabled for the focus trap. */
  None = 1 << 0,
  /** Ensure that we restore the focus when unmounting the focus trap. */
  RestoreFocus = 1 << 4,
  /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */
  TabLock = 1 << 2,
}

const _FocusTrap = <Tag extends React.ElementType = typeof DEFAULT_FOCUS_TRAP_TAG>(
  { containers, features = Features.All, initialFocus, ...theirProps }: RootUIProps<Tag> & FocusTrapProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const container = React.useRef<HTMLDivElement | null>(null);
  const focusTrapRef = useSyncRefs(container, ref);
  const ownerDocument = useOwnerDocument(container);
  const direction = useTabDirection();

  if (!useServerHandoffComplete()) {
    features = Features.None;
  }

  useRestoreFocus({ ownerDocument }, Boolean(features & Features.RestoreFocus));

  const previousActiveElement = useInitialFocus(
    { container, initialFocus, ownerDocument },
    Boolean(features & Features.InitialFocus),
  );

  useFocusLock({ container, containers, ownerDocument, previousActiveElement }, Boolean(features & Features.FocusLock));

  const handleFocus = useEvent(() => {
    const el = container.current as HTMLElement;
    if (!el) {
      return;
    }
    match(direction.current, {
      [TabDirection.Backwards]: () => focusIn(el, Focus.Last),
      [TabDirection.Forwards]: () => focusIn(el, Focus.First),
    });
  });

  const ourProps = React.useMemo(() => {
    return { ref: focusTrapRef };
  }, [focusTrapRef]);

  return (
    <>
      {Boolean(features & Features.TabLock) && (
        <Hidden as="button" features={HiddenFeatures.Focusable} onFocus={handleFocus} type="button" />
      )}
      {render({
        defaultTag: DEFAULT_FOCUS_TRAP_TAG,
        name: 'FocusTrap',
        ourProps,
        theirProps,
      })}
      {Boolean(features & Features.TabLock) && (
        <Hidden as="button" features={HiddenFeatures.Focusable} onFocus={handleFocus} type="button" />
      )}
    </>
  );
};

export const FocusTrap = Object.assign(forwardRefWithAs(_FocusTrap), {
  features: Features,
});
