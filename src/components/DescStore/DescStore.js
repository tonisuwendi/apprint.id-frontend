import React from 'react';
import String from '../../config/String';
import { cx } from '@emotion/css';

import { 
  bgColor,
  fontElm,
  padding
} from './styles';

const DescStore = () => {
  return (
    <>
    <div className={cx(bgColor("#F5F6F7"), padding("20px"))}>
      <h3 className={cx(fontElm("Nunito", "17px", "700"))}>{String.dummySloganStore}</h3>
      <p className={cx(fontElm("Nunito", "13px", "500"))}>{String.dummyDescStore}</p>
    </div>
    </>
  )
}

export default DescStore;