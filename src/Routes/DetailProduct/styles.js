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
