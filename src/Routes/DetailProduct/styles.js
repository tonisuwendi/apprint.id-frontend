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

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;

export const textColor = (value) => css`
  color: ${value};
`;

export const margin = (value) => css`
  margin: ${value};
`;

export const buttonOrder = css`
  background-color: #03b263 !important;
  border: none !important;
  color: white !important;
  &:hover {
    background-color: #28964d !important;
  }
`;