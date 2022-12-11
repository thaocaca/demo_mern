import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  Upload
} from "antd";
import {PlusOutlined} from '@ant-design/icons'
import React from "react";
import "./style.scss";
const FormInput = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="horizontal"
    >
      <Form.Item label="Create Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Product Code">
        <Input />
      </Form.Item>
      <Form.Item label="Name">
        <Input />
      </Form.Item>
         <Form.Item label="Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Image</div>
            </div>
          </Upload>
        </Form.Item>
      <Form.Item label="Type">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Amount">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Cost">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Status" valuePropName="checked">
        <Switch />
      </Form.Item>
    </Form>
  );
};

export default FormInput;
