import React from 'react';
import { cx } from '@emotion/css';

import String from '../../config/String';

import {
  imgSize,
  filter,
  fontElm,
  textAlign,
  singleBanner,
  position,
  color,
  centerElm
} from './styles';

const SingleBanner = (props) => {
  return (
    <>
      <div className={cx(singleBanner(props.heightSingleBanner))}>
        <img className={cx(imgSize(props.heightSingleBanner), position("absolute"), props.filterImg ? filter("brightness", "0.4") : null)} src={props.srcImg} alt="banner" />
        <h2 className={cx(fontElm("Nunito", "22px", "800"), textAlign("center"), position("absolute"), color("white"), centerElm)}>{props.title}</h2>
      </div>
    </>
  )
}

export default SingleBanner;