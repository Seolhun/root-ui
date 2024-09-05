import * as React from 'react';

export function forwardRefWithAs<E extends HTMLElement, P = {}>(
  component: React.ForwardRefRenderFunction<E, React.PropsWithoutRef<P>>,
) {
  const forwardRefComponent = React.forwardRef(component);
  forwardRefComponent.displayName = component.displayName || component.name;
  return forwardRefComponent;
}
