import * as React from 'react';

import { GlobalRootClassNameMap } from '../constants';

const CLASSNAME = GlobalRootClassNameMap.WindowLockScroll;
export const useLockScrollClassName = (isVisible: boolean): void => {
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
