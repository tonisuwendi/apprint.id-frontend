import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import 'antd/dist/antd.css';
import { Carousel, Skeleton } from 'antd';

import API from '../../service/index';
import Config from '../../service/Config';

import {
  sizeElm,
  centerElm,
  rouded
} from './styles';

const Banner = (props) => {

  const [banner, setBanner] = useState([]);
  const [bannerLoad, setBannerLoad] = useState(false);
  const [bannerHTO, setBannerHTO] = useState([]);

  useEffect(() => {
    API.getBanner()
    .then((result) => {
      setBanner(result.data.banner);
    })
    API.getBannerHowToOrder()
    .then((result) => {
      setBannerHTO(result.data.banner);
    })
  }, [])

  const settingCarousel = {
    className: 'slider variable-width',
    draggable: true,
    infinite: true,
    variableWidth: true
  }

  if(props.footer){
    settingCarousel.dots = false;
  }

  return (
    <>
    <div className={cx(centerElm, sizeElm(props.width ? props.width : "500px", "auto", props.footer ? "93vw" : '100vw', "auto"))}>
      {
        bannerLoad ?
        null :
        <Skeleton.Image className={cx(sizeElm(props.width ? props.width : "500px", "250px", props.footer ? "93vw" : '100vw', "180px"))} />
      }
      <Carousel {...settingCarousel} autoplay>
        {
          props.footer ? 
          bannerHTO.map((b, i) => {
            return (
              <div key={i}>
                <img style={bannerLoad ? {} : {display: 'none'}} onLoad={() => setBannerLoad(true)} className={cx(sizeElm(props.width ? props.width : "500px", "auto", '93vw'), props.rouded ? rouded(props.rouded) : null)} src={`${Config.backendURL}public/img/banner/${b.img}`} alt="banner" />
              </div>
            )
          }) :
          banner.map((b, i) => {
            return (
              <div key={i}>
                <img style={bannerLoad ? {} : {display: 'none'}} onLoad={() => setBannerLoad(true)} className={cx(sizeElm(props.width ? props.width : "500px", "auto", '100vw'), props.rouded ? rouded(props.rouded) : null)} src={`${Config.backendURL}public/img/banner/${b.img}`} alt="banner" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
    </>
  )
}

export default Banner;