import React from 'react';
import { cx } from '@emotion/css';

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
  fontSizeMobile
} from './styles';

const HomePage = () => {
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
      <section className={cx(dGrid, margin("15px 0 40px 0"), sizeElmMobile("93%", "auto"))}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </section>
      <DescStore />
      <Footer />
    </div>
    </>
  )
}

export default HomePage;