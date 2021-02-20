import React from 'react';
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';

class Demo extends React.Component {
  state = {
    active: false,
    size: 'default',
    buttonShape: 'default',
    avatarShape: 'circle',
  };

  handleActiveChange = checked => {
    this.setState({ active: checked });
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleShapeChange = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { active, size, buttonShape, avatarShape } = this.state;
    return (
      <>
        <Space>
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          <Skeleton.Input style={{ width: 200 }} active={active} size={size} />
        </Space>
        <br />
        <br />
        <Skeleton.Image />
        <Divider />
        <div style={{margin: "50px"}}>
          <Skeleton active="true" avatar paragraph={{rows: 0}} />
        </div>
      </>
    );
  }
}

export default Demo;