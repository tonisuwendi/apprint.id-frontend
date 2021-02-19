import React from 'react';
import { cx } from '@emotion/css';
import Navbar from '../../components/Navbar/Navbar';
import SingleBanner from '../../components/SingleBanner/SingleBanner';

import {
  desktopView
} from './styles';

const DetailProduct = () => {
  return(
    <>
      <div className={cx(desktopView)}>
        <Navbar />
        <SingleBanner heightSingleBanner="auto" srcImg="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/7498/PAPER-HOT-CUP-720x360-Stiker.jpg" />
      </div>
    </>
  )
}

export default DetailProduct;