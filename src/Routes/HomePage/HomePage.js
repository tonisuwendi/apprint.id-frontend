import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';
import { Skeleton, Alert } from 'antd';
import MetaComp from '../../components/MetaComp/MetaComp';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import SectionProduct from '../../components/SectionProduct/SectionProduct';
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
  dGrid,
  sizeElmMobile,
  fontSizeMobile,
  centerElm,
  marginMobile,
  button
} from './styles';

const HomePage = () => {

  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([]);
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
    API.getSections()
    .then(result => {
      if(result.data.sections.length > 0) {
        setSections(result.data.sections);
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
        sections.length > 0 ?
        sections.map((section, i) => {
          return <Fragment key={i}>
            <div>
              <h2 className={cx(margin("30px 0 10px 0"), marginMobile("40px 15px 0px 15px"), fontSizeMobile("18px"), fontElm("Nunito", "20px", "700"))}>{section.title}</h2>
              <SectionProduct id={section.id} />
            </div>
            <Link style={imgProductLoad ? {} : {display: 'none'}} to={`/section/${section.slug}`}>
              <button className={cx(centerElm, button(), fontElm("Nunito", "15px", "700"))}>{String.buttonShowAllProduct}</button>
            </Link>
          </Fragment>
        }) : null
      }
      {
        imgProductLoad ?
        null :
        <Fragment>
          <div className={cx(margin("0"))}>
            <Skeleton.Input active size="small" style={{ width: 150 }} className={cx(marginMobile("20px 10px 0 10px"))} />
            <section className={cx(dGrid, margin("5px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            </section>
          </div>
          <Skeleton.Input active size="default" className={cx(marginMobile("0 10px"))} style={{ width: 150 }} />
        </Fragment>
      }
      {
        products ?
        <Fragment>
          <div style={imgProductLoad ? {} : {display: 'none'}}>
            <h2 className={cx(margin("40px 0 10px 0"), marginMobile("30px 15px 0 15px"), fontSizeMobile("18px"), fontElm("Nunito", "20px", "700"))}>{setting ? setting.title_favorite : ""}</h2>
            <section className={cx(dGrid, margin("5px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
              {
                products.map((product, i) => {
                  return <CardProduct setImgProductLoad={(value) => handleImgProductLoad(value)} load key={i} data={product} />
                })
              }
            </section>
          </div>
          <Link style={imgProductLoad ? {} : {display: 'none'}} to="/products">
          <button className={cx(centerElm, button(), fontElm("Nunito", "15px", "700"))}>{String.buttonShowAllProduct}</button>
          </Link>
        </Fragment>
         :
        <div className={cx(margin("20px 0 0 0"))}>
          <Alert banner message={
              <div>Belum ada produk untuk saat ini</div>
          } />
        </div>
      }
      <div className={cx(margin("30px 0 0 0"))}>
        {
          setting ?
          setting.status_banner_hto ?
          <Fragment>
            <h2 className={cx(margin("30px 0 0 0"), marginMobile("30px 15px 0 15px"), fontSizeMobile("14px"), fontElm("Nunito", "16px", "700"))}>{String.titleStep}</h2>
            <div className={cx(margin("10px 0 25px 0"))}>
              <Banner width="500px" rouded="10px" footer />
            </div>
          </Fragment> : null : null
        }
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