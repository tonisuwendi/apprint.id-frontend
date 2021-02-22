import { css } from '@emotion/css';

export const singleBanner = (height) => css`
  height: ${height};
  position: relative;
  width: 100%;
`;

export const bgColor = (value) => css`
  background-color: ${value};
`;

export const position = (value) => css`
  position: ${value};
`;

export const centerElm = css`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const imgSize = (height) => css`
  height: ${height};
  object-fit: cover;
  width: 100%;
`;

export const filter = (type, value) => css`
  filter: ${type}(${value});
`;

export const fontElm = (ff = "sans-serif", fs = "20px", fw = "400") => css`
  font-family: ${ff};
  font-size: ${fs};
  font-weight: ${fw};
`;

export const textAlign = (value) => css`
  text-align: ${value};
`;

export const color = (value) => css`
  color: ${value};
`;