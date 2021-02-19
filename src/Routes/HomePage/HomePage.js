import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import { Button } from 'antd';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Category/Category';
import String from '../../config/String';

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
  
  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <>
    <div className={cx(desktopView)}>
      <Navbar />
      <Banner />
      <h2 className={cx(margin("30px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.categoryTitleHome}</h2>
      <section className={cx(dGrid, margin("10px 0 0 0"), sizeElmMobile("93%", "auto"))}>
        <Category />
        <Category />
        <Category />
        <Category />
      </section>
      <h2 className={cx(margin("40px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.productTitleHome}</h2>
      <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
      <Link to="/products">
        <Button size="large" className={cx(centerElm)}>Lihat Semua Produk</Button>
      </Link>
      <div className={cx(margin("30px 0 0 0"))}>
        <DescStore />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default HomePage;