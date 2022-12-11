import React, { useEffect, useState } from "react";
import "./style.scss";
import { Button, Modal, Space, Table } from "antd";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./style.scss";
import SearchProduct from "../../components/SearchProduct/SearchProduct";
import ModalForm from "../../components/Modal/ModalForm";
import { getProduct } from "../../services/ProductService";
const { confirm } = Modal;

const Product = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isCreateProduct, setIsCreateProduct] = useState(false);
  const handleShowModal = () => {
    setIsCreateProduct(true);
    setIsOpenModal(true);
  };

  const [row, setRow] = useState([]);
  const [productDetail, setProductDetail] = useState({});


  async function fetchProducts() {
    const { data } = await getProduct();
    setRow(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("ok");
      },
      onCancel() {
        console.log("cancel");
      },
    });
  };

  const columns = [
    {
      title: "Create Date",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "Product Code",
      dataIndex: "productCode",
      key: "productCode",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "green" }}
            onClick={() => {
              setIsCreateProduct(false);
              setIsOpenModal(true);
              setProductDetail({
                ...record,
                createDate: record.createDate,
                productCode: record.productCode,
                name: record.name,
                type: record.type,
                cost: record.cost,
                amount: record.amount,
                status: record.status,
              });
            }}
          />
          <DeleteOutlined
            style={{ color: "red" }}
            onClick={showDeleteConfirm}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="product">
        <div className="top">
          <SearchProduct />
          <Button type="primary" onClick={handleShowModal}>
            Create Product
          </Button>
        </div>
        <Table columns={columns} dataSource={row} />
      </div>
      <ModalForm
        isCreateProduct={isCreateProduct}
        open={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        productDetail={productDetail}
        onSubmit={fetchProducts}
      />
 
    </>
  );
  
};

export default Product;
