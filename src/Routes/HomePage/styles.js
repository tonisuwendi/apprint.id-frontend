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

export const button = (full = true) => css`
  background-color: white;
  border: 2px solid dodgerblue;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 0;
  transition: 0.2s;
  width: ${full ? "100%" : full};
  @media (max-width: 500px) {
    width: ${full ? "93%" : full};
  }
  :hover {
    background-color: #f5f5f5;
  }
`;

export const dFlex = (direction, jc) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${jc};
`;

export const dGrid = css`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, 1fr);
`;

export const margin = (value) => css`
  margin: ${value}
`;

export const padding = (value) => css`
  box-sizing: border-box;
  padding: ${value}
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

export const sizeElmMobile = (width, height) => css`
  @media (max-width: 500px){
    height: ${height};
    left: 50%;
    position: relative;
    transform: translate(-50%, 0);
    width: ${width};
  }
`;

export const marginMobile = (value) => css`
  @media (max-width: 500px){
    margin: ${value};
  }
`;

export const centerElm = css`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
`;