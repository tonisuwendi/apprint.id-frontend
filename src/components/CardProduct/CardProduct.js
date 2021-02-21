import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';

import CardProductLoad from './CardProductLoad';
import Config from '../../service/Config';

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

const CardProduct = (props) => {
  const handleImgProduct = () => {
    props.setImgProductLoad(true);
  }
  return (
    <>
    {
      props.load ?
      <Link to={`product/${props.data.slug}`} className={cx(card, rounded("5px"))}>
        <img className={cx(sizeElm("100%"))} onLoad={() => handleImgProduct()} src={`${Config.backendURL}public/img/products/${props.data.img}`} alt="product" />
        <div className={cx(padding("15px"))}>
          <h3 className={cx(margin("0"), fontSizeMobile("15px"), fontElm("Nunito", "18px", "600"))}>{props.data.title}</h3>
          <p className={cx(margin("5px 0"), fontSizeMobile("12px"), textColor("#555"), fontElm("Nunito", "13px", "400"))}>Mulai dari {props.data.price}</p>
        </div>
      </Link>
      :
      <div className={cx(card, rounded("5px"))}>
        <CardProductLoad />
      </div>
    }
    </>
  )
}

export default CardProduct;