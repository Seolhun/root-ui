import Color from 'color';
import { concat, range } from 'lodash-es';

export const alpha = (clr, val) => Color(clr).alpha(val).rgb().string();
export const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
export const darken = (clr, val) => Color(clr).darken(val).rgb().string();

export const presetRanges = concat(range(0, 10, 0.5), range(10, 401));
