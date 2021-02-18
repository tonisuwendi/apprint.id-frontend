import { css } from '@emotion/css';

const shadow = "rgb(0 0 0 / 15%) 0px 1px 3px 0px";

export const card = css`
  background-color: white;
  box-shadow: ${shadow};
  height: auto;
  overflow: hidden;
`;

export const margin = (value) => css `
  margin: ${value};
`;

export const rounded = (value) => css`
  border-radius: ${value};
`;

export const sizeElm = (width, height) => css`
  height: ${height};
  width: ${width};
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

export const textColor = (color) => css`
  color: ${color};
`;