import React from 'react';
import { cx } from '@emotion/css';
import {
  fontElm,
  margin,
  textColor
} from './styles';

const ListComponent = (props) => {
  return(
    <>
    <p className={cx(textColor("white"), margin("5px 0"), fontElm("Nunito", "14px", "500"))}>
      {props.icon}
      <span className={cx(margin("0 0 0 8px"), textColor("#aaa"))}>{props.text}</span>
    </p>
    </>
  )
}

export default ListComponent;