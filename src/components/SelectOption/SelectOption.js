import React, { useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import API from '../../service/index';
import String from '../../config/String';
const { Option } = Select;

const SelectOption = (props) => {

  const [option, setOption] = useState([]);

  useEffect(() => {
    API.getOptionBySpec(props.data.id)
    .then((result) => {
      setOption(result.data.option);
    })
  }, [props]);

  return (
    <Form.Item key={props.data.id} label={props.data.name}>
      <Select onChange={props.handleChangeOption} placeholder={String.placeholderSelect}>
        {
          option.map((o) => {
            return <Option key={o.id} value={`${props.specIndex}&]-[&${o.name}`}>{o.name}</Option>
          })
        }
      </Select>
    </Form.Item>
  )
}

export default SelectOption;