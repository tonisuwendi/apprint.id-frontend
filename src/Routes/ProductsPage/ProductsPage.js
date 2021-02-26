import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { Skeleton, Alert } from 'antd';
import MetaComp from '../../components/MetaComp/MetaComp';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Tabbar from '../../components/Tabbar/Tabbar';

import API from '../../service';
import String from '../../config/String';

import {
  desktopView,
  margin,
  fontSizeMobile,
  textAlign,
  fontElm,
  dGrid,
  sizeElmMobile,
  centerElm
} from './styles';

const ProductsPage = () => {

  const [products, setProducts] = useState([]);
  const [imgProductLoad, setImgProductLoad] = useState(false);
  const [setting, setSetting] = useState();

  useEffect(() => {
    API.getProducts()
    .then((result) => {
      if(result.data.products.length > 0){
        setProducts(result.data.products);
      }else{
        setProducts(false);
        handleImgProductLoad(true);
      }
    })
    API.getSetting()
    .then((result) => {
      setSetting(result.data.setting);
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
        <MetaComp appName={setting.app_name} title="Semua Produk" desc={setting.short_desc} img={`logo/${setting.favicon}`} favicon={setting.favicon} />
        : null
      }
      <Navbar />
      {
        imgProductLoad ?
        null :
        <div className={cx(margin("20px 0 0 0"))}>
          <Skeleton.Input active size="small" style={{ width: 150 }} className={cx(centerElm)} />
          <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          </section>
        </div>
      }
      {
        products ?
        <div style={imgProductLoad ? {} : {display: 'none'}}>
          <h2 className={cx(margin("20px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.productTitle}</h2>
          <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
            {
              products.map((product, i) => {
                return <CardProduct setImgProductLoad={(value) => handleImgProductLoad(value)} load key={i} data={product} />
              })
            }
          </section>
        </div> :
        <div className={cx(margin("20px 0 0 0"))}>
          <Alert banner message={
              <div>Belum ada produk untuk saat ini</div>
          } />
        </div>
      }
      <div className={cx(margin("30px 0 0 0"))}>
        <DescStore />
      </div>
      <Footer />
      <Tabbar />
    </div>
    </>
  )
}

export default ProductsPage;