import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { cx } from '@emotion/css';

import { Modal, Input, Button } from 'antd';

import {
  SearchOutlined,
} from '@ant-design/icons';

import String from '../../config/String';

import {
  dFlex,
  NavbarWrapper,
  sizeElm,
  fontSize,
  cursor
} from './styles';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <Link to="/">
            <img className={cx(sizeElm("auto", "21px"))} src="https://m.printerous.com/assets/web/logo-printerous-40739e61608ee3d80aa3f4b39554a9b21d31a50f3e37502f8420f83f5c9383eb.png" alt="logo" />
          </Link>
        </div>
        <div className={cx(dFlex("column", "center"))}>
          <SearchOutlined onClick={showModal} className={cx(fontSize("25px"), cursor("pointer"))} />
        </div>
      </nav>
      <div style={{height: "60px"}}></div>
      <Modal title={String.searchTitle} style={{ top: 10 }} onCancel={handleCancel} visible={isModalVisible} footer={[
        <Button type="primary">{String.btnSearch}</Button>
      ]}>
        <Input size="large" placeholder={String.searchPlaceholder} prefix={<SearchOutlined />} />
      </Modal>
    </Fragment>
    </>
  )
}

export default Navbar;