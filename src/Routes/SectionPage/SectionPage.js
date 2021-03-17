import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { Skeleton, Alert } from 'antd';
import { useParams } from 'react-router';
import MetaComp from '../../components/MetaComp/MetaComp';
import Navbar from '../../components/Navbar/Navbar';
import CardProduct from '../../components/CardProduct/CardProduct';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import Tabbar from '../../components/Tabbar/Tabbar';

import API from '../../service';

import {
  desktopView,
  margin,
  fontSizeMobile,
  textAlign,
  fontElm,
  dGrid,
  sizeElmMobile,
  centerElm
} from './../ProductsPage/styles';

const SectionPage = () => {

  const [section, setSection] = useState({});
  const [products, setProducts] = useState([]);
  const [imgProductLoad, setImgProductLoad] = useState(false);
  const [setting, setSetting] = useState();

  const urlSlug = useParams();

  useEffect(() => {
    API.getSectionBySlug(urlSlug.slug)
    .then(result => {
      if(result.data.section){
        setSection(result.data.section);
        API.getProductSection(result.data.section.id)
        .then((result) => {
          if(result.data.products.length > 0){
            setProducts(result.data.products);
          }else{
            setProducts(false);
            handleImgProductLoad(true);
          }
        })
      }else{
        window.location.href = "/";
      }
    })
    API.getSetting()
    .then((result) => {
      setSetting(result.data.setting);
    })
    window.scrollTo(0,0);
  }, [urlSlug.slug])

  const handleImgProductLoad = (value) => {
    setImgProductLoad(value);
  }

  return (
    <>
    <div className={cx(desktopView)}>
      {
        setting ?
        <MetaComp appName={setting.app_name} title={section.title} desc={setting.short_desc} img={`logo/${setting.favicon}`} favicon={setting.favicon} />
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
          <h2 className={cx(margin("20px 0 0 0"), fontSizeMobile("16px"), textAlign("center"), fontElm("Nunito", "20px", "700"))}>{section.title}</h2>
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
              <div>Tidak ada produk yang dapat ditampilkan</div>
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

export default SectionPage;