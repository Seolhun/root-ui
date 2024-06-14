import * as React from 'react';

import { RootIntent, RootScale } from './RootTheme.types';
import { RootUIContextValues, useRootUIContext } from './RootUI.Context';
import { useRootUIGroupContext } from './RootUIGroup.Context';

export interface UseRootUIProps extends RootUIContextValues {}

function hasScale(scale?: RootScale): scale is RootScale {
  return Boolean(scale);
}

function hasIntent(intent?: RootIntent): intent is RootIntent {
  return Boolean(intent);
}

/**
 * @deprecated Don't use this functions, all component should be independent of the theme.
 */
export function useRootUI({ defaultIntent, defaultScale, intent, scale }: Partial<UseRootUIProps> = {}) {
  const rootUIGroupValues = useRootUIGroupContext();
  const rootUIValues = useRootUIContext();

  const rootScale = React.useMemo<RootScale>(() => {
    if (hasScale(scale)) {
      return scale;
    }
    if (hasScale(rootUIGroupValues.scale)) {
      return rootUIGroupValues.scale;
    }
    if (hasScale(rootUIValues.scale)) {
      return rootUIValues.scale;
    }
    if (hasScale(rootUIGroupValues.defaultScale)) {
      return rootUIGroupValues.defaultScale;
    }
    if (hasScale(rootUIValues.defaultScale)) {
      return rootUIValues.defaultScale;
    }
    return defaultScale || 'md';
  }, [
    defaultScale,
    rootUIGroupValues.defaultScale,
    rootUIGroupValues.scale,
    rootUIValues.defaultScale,
    rootUIValues.scale,
    scale,
  ]);

  const rootIntent = React.useMemo<RootIntent>(() => {
    if (hasIntent(intent)) {
      return intent;
    }
    if (hasIntent(rootUIGroupValues.intent)) {
      return rootUIGroupValues.intent;
    }
    if (hasIntent(rootUIValues.intent)) {
      return rootUIValues.intent;
    }
    if (hasIntent(rootUIGroupValues.defaultIntent)) {
      return rootUIGroupValues.defaultIntent;
    }
    if (hasIntent(rootUIValues.defaultIntent)) {
      return rootUIValues.defaultIntent;
    }
    return defaultIntent || 'primary';
  }, [
    defaultIntent,
    intent,
    rootUIGroupValues.defaultIntent,
    rootUIGroupValues.intent,
    rootUIValues.defaultIntent,
    rootUIValues.intent,
  ]);

  return {
    intent: rootIntent,
    scale: rootScale,
  };
}
