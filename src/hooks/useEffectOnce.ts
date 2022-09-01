import React, { EffectCallback } from 'react';

const useEffectOnce = (effect: EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(effect, []);
};

export { useEffectOnce };
export default useEffectOnce;
