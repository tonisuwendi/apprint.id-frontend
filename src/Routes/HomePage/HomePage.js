import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import { Button, Skeleton } from 'antd';

import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Category/Category';
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

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    API.getCategories()
    .then((result) => {
      setCategories(result.data.categories);
    });
    window.scrollTo(0,0);
  }, [])

  return (
    <>
    <div className={cx(desktopView)}>
      <Navbar />
      <Banner />
      {
        categories.length > 0 ?
        <Fragment>
          <h2 className={cx(margin("30px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.categoryTitleHome}</h2>
          <section className={cx(dGrid, margin("10px 0 0 0"), sizeElmMobile("93%", "auto"))}>
            {
              categories.map((category, i) => {
                return <Category load key={i} data={category} />
              })
            }
          </section>
        </Fragment>
        :
        <div className={cx(margin("30px 0 0 0"))}>
          <Skeleton.Input active size="small" style={{ width: 150 }} className={cx(centerElm)} />
          <section className={cx(dGrid, margin("10px 0 0 0"), sizeElmMobile("93%", "auto"))}>
            <Category />
            <Category />
            <Category />
            <Category />
          </section>
        </div>
      }
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