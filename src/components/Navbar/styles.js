import { css } from '@emotion/css';

const shadow = "rgb(0 0 0 / 15%) 0px 1px 3px 0px";
const vPadding = "0 15px";

export const NavbarWrapper = css`
  background-color: white;
  box-shadow: ${shadow};
  height: 60px;
  padding: ${vPadding};
  position: fixed;
  width: 500px;
  z-index: 9;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const dFlex = (direction, jc) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${jc};
`;

export const sizeElm = (width, height) => css`
  height: ${height};
  width: ${width};
`;

export const fontSize = (size) => css`
  font-size: ${size};
`;

export const cursor = (value) => css `
  cursor: ${value};
`;

export const padding = (value) => css`
  box-sizing: border-box;
  padding: ${value};
`;