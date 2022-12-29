import * as React from 'react';

import { useEvent } from './useEvent';

function useWatch<Dependencies extends any[]>(
  cb: (newValues: [...Dependencies], oldValues: [...Dependencies]) => void | (() => void),
  dependencies: [...Dependencies],
) {
  const track = React.useRef<typeof dependencies>([] as unknown as [...Dependencies]);
  const action = useEvent(cb);

  React.useEffect(() => {
    const oldValues = [...track.current] as unknown as [...Dependencies];
    for (const [idx, value] of dependencies.entries()) {
      if (track.current[idx] !== value) {
        // At least 1 item changed
        const returnValue = action(dependencies, oldValues);
        track.current = dependencies;
        return returnValue;
      }
    }
  }, [action, dependencies]);
}

export { useWatch };
export default useWatch;
