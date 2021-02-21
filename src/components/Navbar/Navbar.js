import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import { Modal, Input, Button, Skeleton } from 'antd';

import {
  SearchOutlined,
} from '@ant-design/icons';

import String from '../../config/String';
import Config from '../../service/Config';
import API from '../../service/index';

import {
  dFlex,
  NavbarWrapper,
  sizeElm,
  fontSize,
  cursor
} from './styles';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [logoDark, setLogoDark] = useState();

  useEffect(() => {
    API.getSetting()
    .then((result) => {
      setLogoDark(result.data.setting.logo_dark);
    })
  })

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(
    <>
    <Fragment>
      <nav className={cx(NavbarWrapper, dFlex("row", "space-between"))}>
        <div className={cx(dFlex("column", "center"))}>
          {
            logoDark ?
            <Link to="/">
              <img className={cx(sizeElm("auto", "21px"))} src={`${Config.backendURL}public/img/logo/${logoDark}`} alt="logo" />
            </Link>
            :
            <Skeleton.Input active size="small" style={{ width: 120 }} />
          }
        </div>
        {
          logoDark ?
          <div className={cx(dFlex("column", "center"))}>
            <SearchOutlined onClick={showModal} className={cx(fontSize("25px"), cursor("pointer"))} />
          </div>
          :
          <div className={cx(dFlex("column", "center"))}>
            <Skeleton.Avatar active size="default" />
          </div>
        }
      </nav>
      <div style={{height: "60px"}}></div>
      <Modal title={String.searchTitle} style={{ top: 10 }} onCancel={handleCancel} visible={isModalVisible} footer={[
        <Button type="primary" key="1">{String.btnSearch}</Button>
      ]}>
        <Input size="large" placeholder={String.searchPlaceholder} prefix={<SearchOutlined />} />
      </Modal>
    </Fragment>
    </>
  )
}

export default Navbar;