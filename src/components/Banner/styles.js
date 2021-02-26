import { css } from '@emotion/css';

export const sizeElm = (width, height, mWidth = "100vw", mHeight = null) => css`
  @media (min-width: 501px) {
    height: ${height} !important;
    width: ${width} !important;
  }
  @media (max-width: 500px) {
    height: ${mHeight} !important;
    width: ${mWidth} !important;
  }
`;

export const centerElm = css`
  left: 50%;
  position: relative;
  transform: translate(-50%, 0);
`;

export const rouded = (value) => css`
  border-radius: ${value};
`;