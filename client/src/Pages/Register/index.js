import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../services/AuthService";
import "./style.scss";

const Register = () => {
  const navigate = useNavigate();
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 12,
        offset: 8,
      },
    },
  };
  const [registerForm] = Form.useForm();
  const onFinish = async () => {
    const values = registerForm.getFieldValue();
    if (await register({ ...values })) {

      navigate('/home')


    }
  };

  return (
    <div className="page-register">
      <Form
        {...formItemLayout}
        form={registerForm}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        className="cover"
      >
        <h1>Register</h1>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailFormItemLayout} className="btn">
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
