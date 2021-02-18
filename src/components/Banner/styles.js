import { css } from '@emotion/css';

export const sizeElm = (width, height) => css`
  @media (min-width: 500px) {
    height: ${height};
    width: ${width};
  }
  @media (max-width: 500px) {
    height: auto;
    width: 100vw;
  }
`;