import React, { Fragment, useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';
import { Modal, Skeleton } from 'antd';
import Category from '../../components/Category/Category'; 
import String from '../../config/String';
import API from '../../service/index';
import {
  HomeFilled,
  AppstoreFilled,
  MessageFilled
} from '@ant-design/icons';

import {
  tabbar,
  dFlex,
  margin,
  textColor,
  fontElm
} from './styles';

const Tabbar = (props) => {

  const [modalCategories, setModalCategories] = useState(false);
  const [categories, setCategories] = useState([]);
  const [whatsApp, setWhatsApp] = useState();

  useEffect(() => {
    API.getCategories()
    .then((result) => {
      setCategories(result.data.categories);
    })
    API.getSetting()
    .then((result) => {
      setWhatsApp(result.data.setting.whatsapp);
    })
  }, []);

  const gotoWa = () => {
    window.open(`https://wa.me/${whatsApp}`);
  }

  return(
    <>
    <Fragment>
      <div style={{height: "60px"}}></div>
      <div className={cx(tabbar, dFlex("row", "space-around"))}>
        {
          whatsApp ?
          <Fragment>
            <Link to="/">
              <div className={cx(dFlex("column", "center"), textColor(props.homePage ? "dodgerblue" : "#555"))} style={{minWidth: "100px", cursor: "pointer"}}>
                <HomeFilled className={cx(fontElm("", "18px", ""))} />
                <p className={cx(margin("3px 0 0 0"), fontElm("Nunito", "12px", "400"))}>{String.textTabbarHome}</p>
              </div>
            </Link>
            <div className={cx(dFlex("column", "center"), textColor(modalCategories ? "dodgerblue" : "#555"))} onClick={() => setModalCategories(true)} style={{minWidth: "100px", cursor: "pointer"}}>
              <AppstoreFilled className={cx(fontElm("", "18px", ""))} />
              <p className={cx(margin("3px 0 0 0"), fontElm("Nunito", "12px", "400"))}>{String.textTabbarOurProduct}</p>
            </div>
            <div onClick={() => gotoWa()} className={cx(dFlex("column", "center"), textColor("#555"))} style={{minWidth: "100px", cursor: "pointer"}}>
              <MessageFilled className={cx(fontElm("", "18px", ""))} />
              <p className={cx(margin("3px 0 0 0"), fontElm("Nunito", "12px", "400"))}>{String.textTabbarChat}</p>
            </div>
          </Fragment>
          :
          <Fragment>
            <Skeleton.Avatar active size="default" />
            <Skeleton.Avatar active size="default" />
            <Skeleton.Avatar active size="default" />
          </Fragment>
        }
        
      </div>
      <Modal
        title={String.textModalCategories}
        centered
        visible={modalCategories}
        footer={false}
        onCancel={() => setModalCategories(false)}
        bodyStyle={{padding: "10px 24px"}}
      >
        {
          categories.map((category, i) => {
            return <Category categoryClick={(value) => setModalCategories(value)} load key={i} modal data={category} />
          })
        }
      </Modal>
    </Fragment>
    </>
  )
}

export default Tabbar;