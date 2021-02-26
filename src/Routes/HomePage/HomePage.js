import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';
import { Button, Skeleton, Alert } from 'antd';
import MetaComp from '../../components/MetaComp/MetaComp';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Tabbar from '../../components/Tabbar/Tabbar';
import String from '../../config/String';
import API from '../../service';

import {
  desktopView,
  fontElm,
  margin,
  textAlign,
  dGrid,
  sizeElmMobile,
  fontSizeMobile,
  centerElm
} from './styles';

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [imgProductLoad, setImgProductLoad] = useState(false);
  const [setting, setSetting] = useState();
  
  useEffect(() => {
    API.getSetting()
    .then((result) => {
      setSetting(result.data.setting);
    })
    API.getProductsHome()
    .then((result) => {
      if(result.data.products.length > 0){
        setProducts(result.data.products);
      }else{
        setProducts(false);
        handleImgProductLoad(true);
      }
    })
    window.scrollTo(0,0);
  }, [])

  const handleImgProductLoad = (value) => {
    setImgProductLoad(value);
  }
  return (
    <>
    <div className={cx(desktopView)}>
      {
        setting ?
        <MetaComp appName={setting.app_name} title={setting.app_name} desc={setting.short_desc} img={`logo/${setting.favicon}`} favicon={setting.favicon} />
        : null
      }
      <Navbar />
      <Banner />
      {
        imgProductLoad ?
        null :
        <Fragment>
          <div className={cx(margin("30px 0 0 0"))}>
            <Skeleton.Input active size="small" style={{ width: 150 }} className={cx(centerElm)} />
            <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            </section>
          </div>
          <Skeleton.Input active size="default" style={{ width: 150 }} className={cx(centerElm)} />
        </Fragment>
      }
      {
        products ?
        <Fragment>
          <div style={imgProductLoad ? {} : {display: 'none'}}>
            <h2 className={cx(margin("30px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.productFavorite}</h2>
            <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
              {
                products.map((product, i) => {
                  return <CardProduct setImgProductLoad={(value) => handleImgProductLoad(value)} load key={i} data={product} />
                })
              }
            </section>
          </div>
          <Link style={imgProductLoad ? {} : {display: 'none'}} to="/products">
            <Button size="large" className={cx(centerElm)}>{String.buttonShowAllProduct}</Button>
          </Link>
        </Fragment>
         :
        <div className={cx(margin("20px 0 0 0"))}>
          <Alert banner message={
              <div>Belum ada produk untuk saat ini</div>
          } />
        </div>
      }
      <h2 className={cx(margin("35px 0 0 0"), fontSizeMobile("14px"), textAlign("center"), fontElm("Nunito", "16px", "700"))}>{String.titleStep}</h2>
      <div className={cx(margin("10px 0 25px 0"))}>
        <Banner width="500px" rouded="10px" footer />
      </div>
      <div className={cx(margin("0"))}>
        <DescStore />
      </div>
      <Footer />
      <Tabbar homePage />
    </div>
    </>
  )
}

export default HomePage;