import { css } from '@emotion/css';

export const bgColor = (value) => css`
  background-color: ${value};
`;

export const textColor = (color) => css`
  color: ${color};
`;

export const sizeElm = (width, height) => css`
  height: ${height};
  width: ${width};
`;

export const margin = (value) => css`
  margin: ${value};
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

export const dFlex = (direction, jc) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${jc};
`;