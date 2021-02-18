import React from 'react';
import { cx } from '@emotion/css';

import {
  card,
  margin,
  padding,
  rounded,
  sizeElm,
  fontElm,
  textColor
} from './styles';
import String from '../../config/String';

const CardProduct = () => {
  return (
    <>
    <div className={cx(card, rounded("5px"))}>
      <img className={cx(sizeElm("100%"))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/2451/webp_Food_Paper_Bag_THUMBNAIL.webp" alt="image product" />
      <div className={cx(padding("15px"))}>
        <h3 className={cx(margin("0"), fontElm("Nunito", "18px", "600"))}>{String.dummyProductTitle}</h3>
        <p className={cx(margin("5px 0"), textColor("#555"), fontElm("Nunito", "13px", "400"))}>{String.dummyProductPrice}</p>
      </div>
    </div>
    </>
  )
}

export default CardProduct;