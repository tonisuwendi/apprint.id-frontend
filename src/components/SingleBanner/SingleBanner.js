import React, { useState } from 'react';
import { cx } from '@emotion/css';

import {
  imgSize,
  filter,
  fontElm,
  textAlign,
  singleBanner,
  position,
  color,
  centerElm,
  bgColor
} from './styles';

const SingleBanner = (props) => {

  const [imgLoad, setImgLoad] = useState(false);

  return (
    <>
      {
        imgLoad ?
        null
        :
        <div className={cx(singleBanner(props.heightSingleBanner), bgColor("#ddd"))}></div>
      }
      <div style={imgLoad ? {} : {display: 'none'}} className={cx(singleBanner(props.heightSingleBanner))}>
        <img onLoad={() => setImgLoad(true)} className={cx(imgSize(props.heightSingleBanner), position("absolute"), props.filterImg ? filter("brightness", "0.4") : null)} src={props.srcImg} alt="banner" />
        <h2 className={cx(fontElm("Nunito", "22px", "800"), textAlign("center"), position("absolute"), color("white"), centerElm)}>{props.title}</h2>
      </div>
    </>
  )
}

export default SingleBanner;