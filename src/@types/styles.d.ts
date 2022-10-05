import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// This enables typescript to load themes properties
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
