export type ColorSchemeSwitcherValues = 'auto' | 'dark' | 'light';
export type ColorScheme = Exclude<ColorSchemeSwitcherValues, 'auto'>;
