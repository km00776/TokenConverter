import type { theme as _light } from "./build/js/light/theme-light.d.ts";
import type { theme as _dark } from "./build/js/dark/theme-dark.d.ts";

// Re-export the runtime bindings
export declare const lightTheme: typeof _light;
export declare const darkTheme: typeof _dark;

// Theme union/type
export type Theme = typeof _light;
