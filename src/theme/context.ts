import * as React from 'react';
import { BrandColors } from './colors';

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

export type ThemeContext = typeof defaultTheme;
export type ThemeProp = DeepPartial<ThemeContext>;

export function mergeThemeProps(
  theme: ThemeContext,
  propsTheme?: ThemeProp
): ThemeContext {
  if (!propsTheme) {
    return theme;
  }
  return {
    colors: propsTheme.colors
      ? { ...theme.colors, ...propsTheme.colors }
      : theme.colors,
    font: propsTheme.font
      ? {
          ...theme.font,
          ...propsTheme.font,
        }
      : theme.font,
  };
}

export const defaultTheme = {
  colors: {
    main: BrandColors.BLUE,
    mainAccent: BrandColors.BLUE_ACCENT,

    secondary: BrandColors.DARK_GRAY,
    secondaryAccent: BrandColors.DARK_GRAY_ACCENT,
    secondaryContrast: BrandColors.WHITE,
    secondaryContrastAccent: BrandColors.WHITE_ACCENT,

    text: BrandColors.TEXT,
    textAccent: BrandColors.TEXT_DARK,
    border: BrandColors.BORDER,
    highlight: BrandColors.ORANGE,
    error: BrandColors.RED,
    success: BrandColors.GREEN,
    warn: BrandColors.ORANGE,
    info: BrandColors.BLUE,
  },
  font: {
    family: 'Source Sans Pro',
    tiny: '1rem',
    small: '1.2rem',
    medium: '1.3rem',
    standard: '1.5rem',
    large: '1.7rem',
    huge: '2rem',
    max: '2.5rem',
  },
};

export type ColorName = keyof typeof defaultTheme['colors'];
export type FontSize = keyof Omit<typeof defaultTheme['font'], 'family'>;

export const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
} = React.createContext<ThemeContext>(defaultTheme);
