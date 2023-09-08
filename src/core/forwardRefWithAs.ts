import * as React from 'react';

/**
 * This is a hack, but basically we want to keep the full 'API' of the component, but we do want to
 * wrap it in a forwardRef so that we _can_ passthrough the ref
 */
export function forwardRefWithAs<T extends { displayName?: string; name: string }>(
  component: T,
): T & { displayName: string } {
  return Object.assign(React.forwardRef(component as unknown as any) as any, {
    displayName: component.displayName ?? component.name,
  });
}
