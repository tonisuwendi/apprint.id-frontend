import React, { useEffect, useState } from 'react';
import { cx } from '@emotion/css';
import { Skeleton } from 'antd';
import API from '../../service/index';

import { 
  bgColor,
  fontElm,
  padding
} from './styles';

const DescStore = () => {

  const [setting, setSetting] = useState();

  useEffect(() => {
    API.getSetting()
    .then((result) => {
      setSetting(result.data.setting);
    })
  }, [])

  return (
    <>
    {
      setting ?
      <div className={cx(bgColor("#F5F6F7"), padding("20px"))}>
        <h3 className={cx(fontElm("Nunito", "17px", "700"))}>{setting.slogan}</h3>
        <p className={cx(fontElm("Nunito", "13px", "500"))}>{setting.about}</p>
      </div>
      :
      <div className={cx(bgColor("#F5F6F7"), padding("20px"))}>
        <Skeleton paragraph={{rows: 5}} active />
      </div>
    }
    
    </>
  )
}

export default DescStore;