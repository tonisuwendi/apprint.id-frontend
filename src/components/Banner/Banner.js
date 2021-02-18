import React from 'react';
import { cx } from '@emotion/css';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import {
  sizeElm  
} from './styles';

const Banner = () => {

  const settingCarousel = {
    className: 'slider variable-width',
    draggable: true,
    infinite: true,
    variableWidth: true
  }

  return (
    <>
    <div>
      <Carousel {...settingCarousel} autoplay>
        <div>
          <img className={cx(sizeElm("500px", ""))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/8643/webp_Kemasan_Polos_Stiker1_720x360.webp" alt="banner 1" />
        </div>
        <div>
          <img className={cx(sizeElm("500px", ""))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/8150/webp_Kemasan_Polos_720x360.webp" alt="banner 1" />
        </div>
        <div>
          <img className={cx(sizeElm("500px", ""))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/12351/webp_MASKER-SEPEDA_5----720x360.webp" alt="banner 1" />
        </div>
      </Carousel>
    </div>
    </>
  )
}

export default Banner;