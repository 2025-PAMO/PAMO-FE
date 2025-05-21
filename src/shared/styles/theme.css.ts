import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: '#2EEEFF',
    black: '#222222',
    white: '#ffffff',
    green: '#086840',
    yellow: '#7A8103',
    purple: '#9747FF'
  },
  font: {
    body: 'Noto Sans, sans-serif',
  },
});
