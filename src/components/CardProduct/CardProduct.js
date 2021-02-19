import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';

import {
  card,
  margin,
  padding,
  rounded,
  sizeElm,
  fontElm,
  textColor,
  fontSizeMobile
} from './styles';
import String from '../../config/String';

const CardProduct = () => {
  return (
    <>
    <Link to="/product/paper-bag-makanan" className={cx(card, rounded("5px"))}>
      <img className={cx(sizeElm("100%"))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/asset/file/2451/webp_Food_Paper_Bag_THUMBNAIL.webp" alt="image product" />
      <div className={cx(padding("15px"))}>
        <h3 className={cx(margin("0"), fontSizeMobile("15px"), fontElm("Nunito", "18px", "600"))}>{String.dummyProductTitle}</h3>
        <p className={cx(margin("5px 0"), fontSizeMobile("12px"), textColor("#555"), fontElm("Nunito", "13px", "400"))}>{String.dummyProductPrice}</p>
      </div>
    </Link>
    </>
  )
}

export default CardProduct;