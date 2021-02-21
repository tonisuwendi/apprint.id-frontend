import { css } from '@emotion/css';
import '../../assets/fonts.css';

const widthDesktop = "500px";
const widthMobile = "100%";

export const desktopView = css`
  margin: auto;
  position: relative;
  width: ${widthDesktop};
  @media (max-width: 500px) {
    width: ${widthMobile};
  }
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

export const fontSizeMobile = (value) => css`
  @media (max-width: 500px){
    font-size: ${value};
  }
`;

export const dGrid = css`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
`;

export const sizeElmMobile = (width, height) => css`
  @media (max-width: 500px){
    height: ${height};
    left: 50%;
    position: relative;
    transform: translate(-50%, 0);
    width: ${width};
  }
`;
