import 'styled-components';
import { Theme } from './contexts/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
