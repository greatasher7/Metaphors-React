import { DefaultTheme, css } from 'styled-components';

// variables
const variable = {
  colors: {
    A_000: '#000000',
    A_222: '#222222',
    A_666: '#666666',
    A_999: '#999999',
    A_BBB: '#BBBBBB',
    A_DDD: '#DDDDDD',
    A_EEE: '#EEEEEE',
    A_FFF: '#FFFFFF',
    background_color: '#12152E',
  },
};

// mixins
const mixin = {
  textStyle: {
    M_18: css`
      font-weight: 500;
      font-size: 18px;
      letter-spacing: -0.02em;
    `,
    M_13: css`
      font-weight: 500;
      font-size: 13px;
      letter-spacing: -0.02em;
    `,

    R_15: css`
      font-weight: 400;
      font-size: 15px;
      letter-spacing: -0.02em;
    `,
    R_13: css`
      font-weight: 400;
      font-size: 13px;
      letter-spacing: -0.02em;
    `,
    R_12: css`
      font-weight: 400;
      font-size: 12px;
      letter-spacing: -0.02em;
    `,
    R_11: css`
      font-weight: 400;
      font-size: 11px;
      letter-spacing: -0.02em;
    `,
  },

  paddingSide_depth1: css`
    padding-left: 22px;
    padding-right: 22px;
  `,
  paddingSide_depth2: css`
    padding-left: 11px;
    padding-right: 11px;
  `,
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
