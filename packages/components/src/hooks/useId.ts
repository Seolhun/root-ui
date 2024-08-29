import { isNil } from '@fxts/core';
import * as React from 'react';

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
export const useId = React.useId ?? _useId;
