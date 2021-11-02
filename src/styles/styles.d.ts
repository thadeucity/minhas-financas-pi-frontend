/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { appTheme } from './theme';

export type Theme = typeof appTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare global {
  type CustomCss =
    | FlattenInterpolation<ThemeProps<DefaultTheme>>
    | FlattenSimpleInterpolation;
}
