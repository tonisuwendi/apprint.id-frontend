import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';
import CategoryLoad from './CategoryLoad';
import Config from '../../service/Config';

import {
  card,
  cardModal,
  dFlex,
  margin,
  sizeElm,
  rounded,
  fontElm,
  fontSizeMobile,
  sizeElmMobile,
  color
} from './styles';

const Category = (props) => {

  const handleClickCategory = () => {
    props.categoryClick(false);
  }

  return (
    <>
    {
      props.load ?
      <Link onClick={() => handleClickCategory()} className={cx(props.modal ? cardModal : card, rounded("5px"))} to={`/category/${props.data.slug}`}>
        <div className={cx(dFlex("row", "center"))}>
          <img className={cx(sizeElm("40px", "40px"), props.modal ? null : sizeElmMobile("35px", "35px"), rounded("5px"))} src={`${Config.backendURL}public/img/categories/${props.data.icon}`} alt="icon category" />
          <p className={cx(margin("0 0 0 10px"), color("#333"), props.modal ? fontSizeMobile("14px") : fontSizeMobile("12px"), fontElm("Nunito", "15px", "600"))}>{props.data.name}</p>
        </div>
      </Link>
      :
      <div className={cx(props.modal ? cardModal : card, rounded("5px"))}>
        <div className={cx(dFlex("row", "center"))}>
          <CategoryLoad />
        </div>
      </div>
    }
    </>
  )
}

export default Category;