import React from 'react';
import { Skeleton, Space } from 'antd';

const CategoryLoad = () => {
  return (
    <>
    <Space>
      <Skeleton.Avatar active />
      <Skeleton.Input size="small" style={{ width: 100 }} active />
    </Space>
    </>
  )
}

export default CategoryLoad;