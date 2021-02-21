import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Alert } from 'antd';
import { cx } from '@emotion/css';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import SingleBanner from '../../components/SingleBanner/SingleBanner';
import String from '../../config/String';
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
      <SingleBanner title={category.name} filterImg heightSingleBanner={String.heightImgSingleBanner} srcImg="https://prts-gutenberg.s3.amazonaws.com/prts-website/production/uploads/navigation_item/thumbnail/89/webp_card.webp" />
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
    </div>
    </>
  )
}

export default CategoryPage;