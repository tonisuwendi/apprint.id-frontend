import React, { Fragment } from 'react';
import { Skeleton } from 'antd';

import { blockSkeleton, margin, padding } from './styles';
import { cx } from '@emotion/css';

const CardProductLoad = () => {
  return (
    <>
    <Fragment>
      <div className={cx(blockSkeleton("100%", "150px"))}></div>
      <div className={cx(padding("20px"))}>
        <Skeleton.Input size="small" style={{ width: 150 }} className={cx(margin("0 0 5px 0"))} active /><br />
        <Skeleton.Input size="small" style={{ width: 100 }} active />
      </div>
    </Fragment>
    </>
  )
}

export default CardProductLoad;