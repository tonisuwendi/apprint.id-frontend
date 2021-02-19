import { css } from '@emotion/css';

const shadow = "rgb(0 0 0 / 15%) 0px 1px 3px 0px";
const shadowHover = "rgb(0 0 0 / 20%) 0px 3px 7px 0px";

export const card = css`
  background-color: white;
  box-shadow: ${shadow};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  padding: 12px 15px;
  transition: 0.2s;
  &:hover {
    box-shadow: ${shadowHover};
    transform: translate(0, -2px);
  }
  @media (max-width: 500px){
    padding: 7px 10px;
  }
`;

export const dFlex = (direction) => css`
  align-items: center;
  display: flex;
  flex-direction: ${direction};
`;

export const margin = (value) => css`
  margin: ${value};
`;

export const sizeElm = (width, height) => css`
  height: ${height};
  width: ${width};
`;

export const sizeElmMobile = (width, height) => css`
  @media (max-width: 500px){
    height: ${height};
    width: ${width};
  }
`;

export const rounded = (value) => css`
  border-radius: ${value};
`;

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;

export const fontSizeMobile = (value) => css`
  @media (max-width: 500px){
    font-size: ${value};
  }
`;

export const color = (value) => css`
  color: ${value};
`;