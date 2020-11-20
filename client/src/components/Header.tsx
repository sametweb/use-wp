import React from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

const { Header: MyHeader } = Layout;

function Header() {
  const history = useHistory();

  return (
    <MyHeader style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="logo">
        <h1>SM</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={() => history.push("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="2" onClick={() => history.push("/blog")}>
          Blog
        </Menu.Item>
        <Menu.Item key="3" onClick={() => history.push("/portfolio")}>
          Portfolio
        </Menu.Item>
      </Menu>
    </MyHeader>
  );
}

export default Header;
