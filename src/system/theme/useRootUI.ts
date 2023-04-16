import * as React from 'react';

import { RootUIContextValues, useRootUIContext } from './RootUI.Context';
import { useRootUIGroupContext } from './RootUIGroup.Context';

export interface UseRootUIProps extends RootUIContextValues {}

function hasScale(scale: UseRootUIProps['scale']): scale is UseRootUIProps['scale'] {
  return !!scale && scale !== 'none';
}

function hasIntent(intent: UseRootUIProps['intent']): intent is UseRootUIProps['intent'] {
  return !!intent && intent !== 'none';
}

export function useRootUI({ intent, scale }: Partial<UseRootUIProps> = {}) {
  const rootUIGroupValues = useRootUIGroupContext();
  const rootUIValues = useRootUIContext();

  const rootScale = React.useMemo(() => {
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
    return 'none';
  }, [rootUIGroupValues.defaultScale, rootUIGroupValues.scale, rootUIValues.defaultScale, rootUIValues.scale, scale]);

  const rootIntent = React.useMemo(() => {
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
    return 'none';
  }, [
    intent,
    rootUIGroupValues.defaultIntent,
    rootUIGroupValues.intent,
    rootUIValues.defaultIntent,
    rootUIValues.intent,
  ]);

  return {
    scale: rootScale,
    intent: rootIntent,
  };
}
