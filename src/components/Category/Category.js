import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';
import String from '../../config/String';

import {
  card,
  dFlex,
  margin,
  sizeElm,
  rounded,
  fontElm,
  fontSizeMobile,
  sizeElmMobile,
  color
} from './styles';

const Category = () => {
  return (
    <>
      <Link className={cx(card, rounded("5px"))} to="/category/kartu">
        <div className={cx(dFlex("row", "center"))}>
          <img className={cx(sizeElm("40px", "40px"), sizeElmMobile("35px", "35px"), rounded("5px"))} src="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/navigation_item/thumbnail/1059/small_webp_THUMBNAIL_COM_Face_Shield_500x500.webp" alt="icon category" />
          <p className={cx(margin("0 0 0 10px"), color("#333"), fontSizeMobile("12px"), fontElm("Nunito", "15px", "600"))}>{String.dummyCategoryName}</p>
        </div>
      </Link>
    </>
  )
}

export default Category;