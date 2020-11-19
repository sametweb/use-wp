import React from "react";
import { Layout, Menu } from "antd";

const { Header: MyHeader } = Layout;

function Header() {
  return (
    <MyHeader style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="logo">
        <h1>SM</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Blog</Menu.Item>
        <Menu.Item key="3">Portfolio</Menu.Item>
      </Menu>
    </MyHeader>
  );
}

export default Header;
