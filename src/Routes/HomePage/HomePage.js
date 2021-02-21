import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import { Button, Skeleton, Alert } from 'antd';

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
  const [products, setProducts] = useState([]);
  const [imgProductLoad, setImgProductLoad] = useState(false);
  
  useEffect(() => {
    API.getCategories()
    .then((result) => {
      setCategories(result.data.categories);
    });
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
      {
        imgProductLoad ?
        null :
        <Fragment>
          <div className={cx(margin("40px 0 0 0"))}>
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
            <h2 className={cx(margin("40px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{String.productTitleHome}</h2>
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
      <div className={cx(margin("30px 0 0 0"))}>
        <DescStore />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default HomePage;