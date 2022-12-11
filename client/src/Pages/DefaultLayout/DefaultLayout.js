import { Layout, Menu } from "antd";
import {
  LogoutOutlined,
  HomeOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
import "./style.scss";
import Title from "antd/lib/typography/Title";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Product from "../Product/Product";
import ChangePassword from "../../components/ChangePassword/ChangePassword";

const { Header, Footer, Sider, Content } = Layout;

function DefaultLayout(props) {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ padding: 10 }}>
        <Title style={{ color: "white", textAlign: "center" }} level={3}>
          SHOP FLOWER WANTER
        </Title>
      </Header>
      <Layout className="content">
        <Sider>
          <Menu
            onClick={({ key }) => {
              if (key === "logout") {
              } else {
                navigate(key);
              }
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            items={[
              { label: "DASHBOARD", key: "dashboard", icon: <HomeOutlined /> },
              {
                label: "PRODUCT",
                key: "product",
                icon: <PieChartOutlined />,
              },
              {
                label: "CHANGE PASSWORD",
                key: "changepassword",
                icon: <UserOutlined />,
              },
              {
                label: "LOGOUT",
                key: "logout",
                icon: <LogoutOutlined />,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content className="site-layout" style={{ padding: "0 50px" }}>
            <div
              className="site-layout-background"
              style={{
                background: "#fff",
                padding: 24,
                height: "100%",
                margin: "16px 0",
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            DAC ©2022 Created by Huynh Dinh Thao
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
