import React from 'react';

import { GlobalRootClassNameMap } from '@/constants';

const CLASSNAME = GlobalRootClassNameMap.WindowLockScroll;
const useLockScroll = (isVisible: boolean): void => {
  React.useEffect(() => {
    if (isVisible) {
      document.documentElement.classList.add(CLASSNAME);
      document.body.classList.add(CLASSNAME);
    } else {
      document.documentElement.classList.remove(CLASSNAME);
      document.body.classList.remove(CLASSNAME);
    }
  }, [isVisible]);
};

export { useLockScroll };
export default useLockScroll;
