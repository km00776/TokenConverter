// index.js

// Import the themes you built under build/js
import { theme as lightTheme } from './build/js/light/theme-light.ts';
import { theme as darkTheme } from './build/js/dark/theme-dark.ts';

// Re-export them so consumers can do:
//   import { lightTheme, darkTheme } from '@km00776/design-tokens';
export { lightTheme, darkTheme };
