import { css } from '@emotion/css';

export const bgColor = (color) => css`
  background-color: ${color};
`;

export const padding = (value) => css`
  box-sizing: border-box;
  padding: ${value};
`;

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;