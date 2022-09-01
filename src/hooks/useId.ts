import React from 'react';

import { isNil } from '@/utils';

import { useIsoMorphicEffect } from './useIsoMorphicEffect';
import { useServerHandoffComplete } from './useServerHandoffComplete';

let id = 0;
function generateId() {
  return ++id;
}

function _useId() {
  const ready = useServerHandoffComplete();
  const [id, setId] = React.useState(ready ? generateId : null);

  useIsoMorphicEffect(() => {
    if (id === null) {
      setId(generateId());
    }
  }, [id]);
  return !isNil(id) ? `${id}` : undefined;
}

// Prefer React's `useId` if it's available.
// @ts-expect-error - `useId` doesn't exist in React < 18.
export const useId = React.useId ?? _useId;
