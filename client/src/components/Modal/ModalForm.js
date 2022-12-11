import React, { useEffect } from "react";
import {
  Modal,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
  InputNumber,
} from "antd";
//import moment from "moment";
import "./style.scss";
import { addProduct, updateProduct } from "../../services/ProductService";
import moment from "moment";

const ModalForm = ({
  open,
  setIsOpenModal,
  productDetail,
  isCreateProduct,
  onSubmit,
  ...rest
}) => {
  const [productForm] = Form.useForm();

  const handleSubmitProduct = async () => {
    const values = productForm.getFieldValue();
    if (isCreateProduct) {
      await addProduct({ ...values });
      setIsOpenModal(false);
    } else {
      await updateProduct(productDetail?._id, { ...values });
      setIsOpenModal(false);
    }
    await onSubmit();
  };

  useEffect(() => {
    productForm.resetFields();
  }, [productDetail._id]);

  return (
    <>
      <Modal
        title={isCreateProduct ? "create product" : "edit product"}
        open={open}
        onOk={handleSubmitProduct}
        onCancel={() => setIsOpenModal(false)}
        {...rest}
      >
        <Form
          form={productForm}
          name="productForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          layout="horizontal"
          initialValues={productDetail}
        >
          <Form.Item label="Create Date" name="createDate">
            <DatePicker
              value={moment(productDetail.createDate)}
              //format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item label="Product Code" name="productCode">
            <Input value={productDetail.productCode} />
          </Form.Item>
          <Form.Item label="Name" name="name">
            <Input value={productDetail.name} />
          </Form.Item>
          <Form.Item label="Type" name="type">
            <Select value={productDetail.type}>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="france">France</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Amount" name="amount">
            <InputNumber value={productDetail.amount} />
          </Form.Item>
          <Form.Item label="Cost" name="cost">
            <InputNumber value={productDetail.cost} />
          </Form.Item>
          <Form.Item label="Status" valuePropName="checked" name="status">
            <Switch checked={productDetail.status} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
