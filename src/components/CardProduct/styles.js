import { css } from '@emotion/css';

const shadow = "rgb(0 0 0 / 15%) 0px 1px 3px 0px";
const shadowHover = "rgb(0 0 0 / 20%) 0px 3px 7px 0px";

export const card = css`
  background-color: white;
  box-shadow: ${shadow};
  cursor: pointer;
  height: auto;
  overflow: hidden;
  transition: 0.2s;
  &:hover {
    box-shadow: ${shadowHover};
    transform: translate(0, -2px);
  }
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

export const fontSizeMobile = (value) => css`
  @media (max-width: 500px){
    font-size: ${value};
  }
`;

export const blockSkeleton = (width, height) => css`
  background-color: #F2F2F2;
  height: ${height};
  width: ${width};
`;