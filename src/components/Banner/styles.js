import { css } from '@emotion/css';

export const sizeElm = (width, height, mHeight = null) => css`
  @media (min-width: 501px) {
    height: ${height} !important;
    width: ${width} !important;
  }
  @media (max-width: 500px) {
    height: ${mHeight} !important;
    width: 100vw !important;
  }
`;