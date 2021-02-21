import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import 'antd/dist/antd.css';
import { Carousel, Skeleton } from 'antd';

import API from '../../service/index';
import Config from '../../service/Config';

import {
  sizeElm  
} from './styles';

const Banner = () => {

  const [banner, setBanner] = useState([]);
  const [bannerLoad, setBannerLoad] = useState(false);

  useEffect(() => {
    API.getBanner()
    .then((result) => {
      setBanner(result.data.banner);
    })
  }, [])

  const settingCarousel = {
    className: 'slider variable-width',
    draggable: true,
    infinite: true,
    variableWidth: true
  }

  return (
    <>
    <div>
      {
        bannerLoad ?
        null :
        <Skeleton.Image className={cx(sizeElm("500px", "250px", "180px"))} />
      }
      <Carousel {...settingCarousel} autoplay>
        {
          banner.map((b, i) => {
            return (
              <div key={i}>
                <img style={bannerLoad ? {} : {display: 'none'}} onLoad={() => setBannerLoad(true)} className={cx(sizeElm("500px", "auto"))} src={`${Config.backendURL}public/img/banner/${b.img}`} alt="banner" />
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