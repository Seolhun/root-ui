import { useRef } from 'react';
import useWindowEvent from './useWindowEvent';

export enum TabDirection {
  Forwards,
  Backwards,
}

function useTabDirection() {
  const direction = useRef(TabDirection.Forwards);

  useWindowEvent(
    'keydown',
    (event) => {
      if (event.key === 'Tab') {
        direction.current = event.shiftKey ? TabDirection.Backwards : TabDirection.Forwards;
      }
    },
    true,
  );

  return direction;
}

export { useTabDirection };
export default useTabDirection;
