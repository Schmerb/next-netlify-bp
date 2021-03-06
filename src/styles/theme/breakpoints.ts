/**
 *
 * Breakpoints
 *
 *   */

import { css } from 'styled-components';

//
// Breakpoints
//
export const breakpoints: BreakpointTypes = {
  desktop: 992,
  tablet: 768,
  mobile: 576,
  smallphones: 321,
};

// const MAX_WIDTH = 1200;
export const MAX_WIDTH = 1040;
//
// Media Queries
//
// Iterate through the sizes and create a media template
// Min-width
export const min = Object.keys(breakpoints).reduce((acc: object, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css.call(undefined, ...args)}
    }
  `;
  return acc;
}, {});

// Max-width
export const max = Object.keys(breakpoints).reduce((acc: object, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (max-width: ${(breakpoints[label] - 1) / 16}em) {
      ${css.call(undefined, ...args)}
    }
  `;
  return acc;
}, {});

export default {
  breakpoints,
  min,
  max,
  MAX_WIDTH,
};

interface BreakpointTypes {
  desktop: number;
  tablet: number;
  mobile: number;
  smallphones: number;
}
