import * as React from 'react';
import ReactDOM from 'react-dom';

export interface UsePortalProps<TargetElement extends HTMLElement = HTMLElement> {
  show: boolean;

  children: React.ReactNode;

  targetElement: TargetElement;
}

export function usePortal({ children, show, targetElement }: UsePortalProps) {
  if (show) {
    return null;
  }
  return ReactDOM.createPortal(children, targetElement);
}
