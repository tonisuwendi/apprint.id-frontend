import React, { useEffect } from 'react';
import { cx } from '@emotion/css';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import SingleBanner from '../../components/SingleBanner/SingleBanner';
import String from '../../config/String';

import {
  desktopView,
  margin,
  dGrid,
  sizeElmMobile
} from './styles';

const CategoryPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <>
    <div className={cx(desktopView)}>
      <Navbar />
      <SingleBanner title={"Kategori Kartu"} filterImg heightSingleBanner={String.heightImgSingleBanner} srcImg="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/navigation_item/thumbnail/89/webp_card.webp" />
      <section className={cx(dGrid, margin("30px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
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

export default CategoryPage;