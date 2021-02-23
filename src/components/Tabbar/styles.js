import { css } from '@emotion/css';

const shadow = "rgb(108 114 124 / 16%) 0px -2px 4px 0px";
const vPadding = "0 15px";

export const tabbar = css`
  background-color: white;
  bottom: 0;
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
  align-items: center;
  display: flex;
  flex-direction: ${direction};
  justify-content: ${jc};
`;

export const textColor = (value) => css`
  color: ${value};
`;

export const margin = (value) => css`
  margin: ${value};
`;

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;