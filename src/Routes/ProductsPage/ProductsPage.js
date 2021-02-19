import React, { useEffect } from 'react';
import { cx } from '@emotion/css';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';

import String from '../../config/String';

import {
  desktopView,
  margin,
  fontSizeMobile,
  textAlign,
  fontElm,
  dGrid,
  sizeElmMobile
} from './styles';

const ProductsPage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <>
    <div className={cx(desktopView)}>
      <Navbar />
      <h2 className={cx(margin("30px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.productAll}</h2>
      <section className={cx(dGrid, margin("15px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
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
      <div className={cx(margin("30px 0 0 0"))}>
        <DescStore />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default ProductsPage;