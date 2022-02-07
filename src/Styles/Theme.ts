import { DefaultTheme, css } from 'styled-components';

// variables
const variable = {
  colors: {
    t_black: '#000000',
    t_white: '#ffffff',
    t_green: 'green',
  },
};

// mixins
const mixin = {
  flexAlignCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

const theme: DefaultTheme = {
  variable,
  mixin,
};

export { theme };

export type TypeVariable = typeof variable;
export type TypeMixin = typeof mixin;
