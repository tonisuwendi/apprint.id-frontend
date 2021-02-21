import React, { Fragment, useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { PhoneFilled, MailFilled, ClockCircleFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import String from '../../config/String';
import { Skeleton } from 'antd';
import ListComponent from './ListComponent';

import API from '../../service/index';
import Config from '../../service/Config';

import {
  bgColor,
  sizeElm,
  padding,
  margin,
  textColor,
  fontElm,
  dFlex
} from './styles';

const Footer = () => {

  const [setting, setSetting] = useState();

  useEffect(() => {
    API.getSetting()
    .then((result) => {
      setSetting(result.data.setting);
    })
  }, [])

  function handleGotoWebsite(url){
    window.open(url);
  }

  return(
    <>
    <footer className={cx(bgColor("#222"), padding("30px 20px"))}>
      {
        setting ?
        <Fragment>
          <img className={cx(sizeElm("150px", "auto"))} src={`${Config.backendURL}public/img/logo/${setting.logo_light}`} alt="logo" />
          <p className={cx(textColor("#aaa"), margin("10px 0 0 0"), fontElm("Nunito", "12px", "400"))}>{setting.short_desc}</p>
          <div className={cx(margin("20px 0 0 0"))}>
            <h3 className={cx(textColor("white"), fontElm("Nunito", "18px", "800"), margin("0"))}>{String.titleContact}</h3>
            <ListComponent icon={<PhoneFilled />} text={setting.telp} />
            <ListComponent icon={<MailFilled />} text={setting.email_contact} />
            <ListComponent icon={<ClockCircleFilled />} text={setting.open_store} />
          </div>
          <div className={cx(margin("30px 0 15px 0"), textColor("#ccc"), fontElm("", "20px", ""), dFlex("row", "center"))}>
            <InstagramFilled onClick={() => handleGotoWebsite(`https://instagram.com/${String.accountInstagram}`)} className={cx(margin("0 5px"))} />
            <FacebookFilled onClick={() => handleGotoWebsite(`https://facebook.com/${String.accountFacebook}`)} className={cx(margin("0 5px"))} />
            <LinkedinFilled onClick={() => handleGotoWebsite(`https://linkedin.com/in/${String.accountLinkedIn}`)} className={cx(margin("0 5px"))} />
          </div>
          <p className={cx(textColor("#ccc"), fontElm("Nunito", "14", "600"), dFlex("row", "center"))}>{setting.copyright}</p>
        </Fragment>
        :
        <Fragment>
          <Skeleton.Input active size="default" style={{ width: 150 }} />
          <Skeleton paragraph={{rows: 4}} active />
        </Fragment>
      }
    </footer>
    </>
  )
}

export default Footer;