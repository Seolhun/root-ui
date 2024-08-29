import * as React from 'react';

export interface NavRoute extends Partial<Location> {
  label?: React.ReactNode;

  pathname: string;
}

export type NavIncludedRouteCallback = <Route extends NavRoute>(route: Route) => boolean;
