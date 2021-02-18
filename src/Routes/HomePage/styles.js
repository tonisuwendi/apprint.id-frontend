import { css } from '@emotion/css';
import '../../assets/fonts.css';

const widthDesktop = "500px";

export const desktopView = css`
  margin: auto;
  position: relative;
  width: ${widthDesktop};
`;

export const dFlex = (direction, jc) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${jc};
`;

export const dGrid = css`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

export const margin = (value) => css`
  margin: ${value}
`;

export const textAlign = (value) => css`
  text-align: ${value};
`;

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;