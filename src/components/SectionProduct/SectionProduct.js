import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import CardProduct from '../CardProduct/CardProduct';
import API from '../../service';
import {
  dGrid,
  sizeElmMobile,
  margin
} from '../../Routes/HomePage/styles';

export default function SectionProduct(props) {
  
  const [products, setProducts] = useState([]);
  const [imgProductLoad, setImgProductLoad] = useState(false);

  useEffect(() => {
    API.getProductSection(props.id)
    .then(result => {
      if(result.data.products.length > 0){
        setProducts(result.data.products);
      }else{
        setProducts(false);
        handleImgProductLoad(true);
      }
    })
  }, [props.id]);

  const handleImgProductLoad = (value) => {
    setImgProductLoad(value);
  }

  return (
    <section style={imgProductLoad ? {} : {display: "block"}} className={cx(dGrid, margin("5px 0 20px 0"), sizeElmMobile("93%", "auto"))}>
      {
        products.map((product, i) => {
          return <CardProduct setImgProductLoad={(value) => handleImgProductLoad(value)} load key={i} data={product} />
        })
      }
    </section>
  )
}