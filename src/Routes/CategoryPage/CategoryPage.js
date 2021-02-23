import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Alert } from 'antd';
import { cx } from '@emotion/css';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Tabbar from '../../components/Tabbar/Tabbar';
import SingleBanner from '../../components/SingleBanner/SingleBanner';
import String from '../../config/String';
import Config from '../../service/Config';
import API from '../../service';

import {
  desktopView,
  margin,
  dGrid,
  sizeElmMobile
} from './styles';

const CategoryPage = () => {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [imgProductLoad, setImgProductLoad] = useState(false);

  const urlSlug = useParams();

  useEffect(() => {
    API.getProductsByCategory(urlSlug.slug)
    .then((result) => {
      setCategory(result.data.category);
      document.title = `Kategori ${result.data.category.name}`;
      if(result.data.products.length > 0){
        setProducts(result.data.products);
      }else{
        setProducts(false);
        handleImgProductLoad(true);
      }
    })
    window.scrollTo(0,0);
  }, [urlSlug])

  const handleImgProductLoad = (value) => {
    setImgProductLoad(value);
  }

  return (
    <>
    <div className={cx(desktopView)}>
      <Navbar />
      <SingleBanner title={category.name} filterImg heightSingleBanner={String.heightImgSingleBanner} srcImg={category.icon ? `${Config.backendURL}public/img/categories/${category.icon}` : '#'} />
      {
        imgProductLoad ?
        null :
        <div className={cx(margin("40px 0 0 0"))}>
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
              <div>Tidak ada produk dengan kategori {category.name}</div>
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

export default CategoryPage;