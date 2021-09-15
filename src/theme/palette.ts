import { createThemePaletteBasic, ThemePaletteBasic } from '@arwes/design';

export interface Palette {
  brand: Record<'primary' | 'secondary', ThemePaletteBasic>;
  greyScale: Record<string, string>;
  ui: Record<string, string>;
}

const palette: Palette = {
  brand: {
    primary: createThemePaletteBasic({ main: '#2ecc71' }, 0.15),
    secondary: createThemePaletteBasic({ main: '#0ff' }, 0.15),
  },

  greyScale: {
    black: '#000',
    darkGrey: '#8c8c8c',
    grey: '#ccc',
    lightGrey: '#f2f2f2',
    semiTransparentBlack: 'rgba(0, 0, 0, 0.8)',
    white: '#fff',
  },

  ui: {
    darkRed: '#8b0000',
    orange: '#ffa500',
    orangeRed: '#ff4500',
    pink: '##ff69b4',
    red: '#cc0000',
    salmon: '#fa8072',
    slateGrey: '#708090',
    yellow: '#ffff00',
  },
};

export default palette;
