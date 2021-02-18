import React from 'react';
import { cx } from '@emotion/css';
import { PhoneFilled, MailFilled, ClockCircleFilled, InstagramFilled, FacebookFilled, LinkedinFilled } from '@ant-design/icons';
import String from '../../config/String';
import ListComponent from './ListComponent';

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
  function handleGotoWebsite(url){
    window.open(url);
  }
  return(
    <>
    <footer className={cx(bgColor("#222"), padding("30px 20px"))}>
      <img className={cx(sizeElm("150px", "auto"))} src="https://m.printerous.com/assets/web/logo-printerous-white@2x-6b488e320d4858cc0171d2f9b3648d608b907bbb88ec570b86bd92fd5d8deee3.png" alt="logo" />
      <p className={cx(textColor("white"), margin("10px 0 0 0"), fontElm("Nunito", "12px", "400"))}>{String.dummyShortDesc}</p>
      <div className={cx(margin("20px 0 0 0"))}>
        <h3 className={cx(textColor("white"), fontElm("Nunito", "18px", "800"), margin("0"))}>{String.dummyTitleContact}</h3>
        <ListComponent icon={<PhoneFilled />} text={String.dummyPhone} />
        <ListComponent icon={<MailFilled />} text={String.dummyEmail} />
        <ListComponent icon={<ClockCircleFilled />} text={String.dummyOpenStore} />
      </div>
      <div className={cx(margin("30px 0 15px 0"), textColor("#ccc"), fontElm("", "20px", ""), dFlex("row", "center"))}>
        <InstagramFilled onClick={() => handleGotoWebsite(`https://instagram.com/${String.accountInstagram}`)} className={cx(margin("0 5px"))} />
        <FacebookFilled onClick={() => handleGotoWebsite(`https://facebook.com/${String.accountFacebook}`)} className={cx(margin("0 5px"))} />
        <LinkedinFilled onClick={() => handleGotoWebsite(`https://linkedin.com/in/${String.accountLinkedIn}`)} className={cx(margin("0 5px"))} />
      </div>
      <p className={cx(textColor("#ccc"), fontElm("Nunito", "14", "600"), dFlex("row", "center"))}>{String.copyRight}</p>
    </footer>
    </>
  )
}

export default Footer;