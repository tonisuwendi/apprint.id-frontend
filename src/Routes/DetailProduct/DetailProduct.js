import React, { Fragment, useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { Form, Card, InputNumber, Button, Skeleton, Alert } from 'antd';
import { useParams } from 'react-router';
import nl2br from 'react-nl2br';
import Navbar from '../../components/Navbar/Navbar';
import SingleBanner from '../../components/SingleBanner/SingleBanner';
import SelectOption from '../../components/SelectOption/SelectOption';
import DescStore from '../../components/DescStore/DescStore';
import Footer from '../../components/Footer/Footer';
import API from '../../service';
import Config from '../../service/Config';
import String from '../../config/String';
import {
  desktopView,
  margin,
  fontElm,
  textColor,
  buttonOrder
} from './styles';

const DetailProduct = () => {

  const [product, setProduct] = useState({});
  const [dataLoad, setDataLoad] = useState(false);
  const [specification, setSpecification] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [alertDanger, setAlertDanger] = useState(false);
  const [dataOrder, setDataOrder] = useState({
    spec: [{}],
    qty: 0
  })
  
  const urlSlug = useParams();

  useEffect(() => {
    API.getProductBySlug(urlSlug.slug)
    .then((result) => {
      if(result.data.success === true){
        document.title = result.data.product.title;
        setProduct(result.data.product);
        setSpecification(result.data.spec);
        setDataLoad(true);
        setDataOrder({
          ...dataOrder,
          spec: result.data.spec
        })
      }else{
        window.location.href = "/";
      }
    })
    window.scrollTo(0,0);
  }, [urlSlug]);

  const enterLoading = () => {
    if(!checkForm()){
      setButtonLoading(true);
      API.getSetting()
      .then((result) => {
        const setting = result.data.setting;
        const msg = generateTextWa(setting.order_wa);
        window.location.href = `https://wa.me/${setting.whatsapp}?text=${msg}`;
      })
    }else{
      setAlertDanger(true);
    }
  };

  const handleChangeQty = (value) => {
    setDataOrder({
      ...dataOrder,
      qty: value
    })
  }

  const onHandleChangeOption = (value) => {
    const splitVal = value.split("&]-[&");
    let items = [...dataOrder.spec];
    let item = {...items[splitVal[0]]};
    item.value = splitVal[1];
    items[splitVal[0]] = item;
    setDataOrder({
      ...dataOrder,
      spec: items
    })
  }

  const checkForm = () => {
    let valueEmpty = false;
    dataOrder.spec.forEach((data) => {
      if(data.value === undefined){
        valueEmpty = true;
      }
    })
    if(dataOrder.qty === 0 || dataOrder.qty === null){
      valueEmpty = true;
    }
    return valueEmpty;
  }

  const generateTextWa = (value) => {
    let item = "";
    dataOrder.spec.forEach((data) => {
      item += data.name + ': ' + data.value + ' %0A'
    })
    let msg = value.replace("[product]", product.title).replace("[spec]", item).replace("[qty]", dataOrder.qty);
    return msg;
  }

  const handleCloseAlert = () => {
    setAlertDanger(false);
  }

  return(
    <>
      <div className={cx(desktopView)}>
        <Navbar />
        <SingleBanner heightSingleBanner="250px" srcImg={product.img ? `${Config.backendURL}public/img/products/${product.img}` : '#'} />
        <div className={cx(margin("15px"))}>
          {
            dataLoad ?
            <Fragment>
              <h2 className={cx(margin("0"), fontElm("Nunito", "20px", "700"))}>{product.title}</h2>
              <p className={cx(margin("0 0 10px 0"), textColor("#333"), fontElm("Nunito", "13px", "500"))}>Kategori: {product.name}</p>
              <p className={cx(margin("0 0 20px 0"), textColor("#111"), fontElm("Nunito", "14px", "500"))}>{nl2br(product.description)}</p>
              <Card size="small">
                {
                  alertDanger ?
                  <Alert
                    description="Mohon isi semua form terlebih dahulu"
                    type="error"
                    closable
                    style={{marginBottom: "10px"}}
                    onClose={handleCloseAlert}
                  /> : null
                }
                <Form layout="vertical">
                  {
                    specification.map((spec, i) => {
                      return (
                        <SelectOption handleChangeOption={(value) => onHandleChangeOption(value)} key={i} specIndex={i} data={spec} />
                      )
                    })
                  }
                  <Form.Item label={String.textQtyOrder}>
                    <InputNumber onChange={handleChangeQty} style={{width: "100%"}} min={0} />
                  </Form.Item>
                </Form>
                <Button className={cx(margin("0 0 15px 0"), buttonOrder)} size="large" block loading={buttonLoading} onClick={() => enterLoading()}>
                  {String.buttonOrder}
                </Button>
              </Card>
            </Fragment>
            :
            <Fragment>
              <Skeleton.Input className={cx(margin("0"))} size="default" active style={{width: "200px"}} /> <br/>
              <Skeleton paragraph={{rows: 3}} active />
              <Card size="small">
                <Form layout="vertical">
                  <Skeleton.Input  className={cx(margin("0 0 4px 0"))} active size="small" style={{width: "150px"}} />
                  <Skeleton.Input active size="default" style={{width: "300px"}} /><br/>
                  <Skeleton.Input  className={cx(margin("8px 0 4px 0"))} active size="small" style={{width: "130px"}} /><br/>
                  <Skeleton.Input className={cx(margin("0 0 9px 0"))} active size="default" style={{width: "300px"}} />
                  <SingleBanner heightSingleBanner="30px" srcImg="#" />
                </Form>
              </Card>
            </Fragment>
          }
        </div>
        <div className={cx(margin("30px 0 0 0"))}>
          <DescStore />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default DetailProduct;