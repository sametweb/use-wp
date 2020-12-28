import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";

const { Header: MyHeader } = Layout;

function Header() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const [activeKey, setActiveKey] = useState<string>("1");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveKey("1");
    } else if (location.pathname.startsWith("/blog")) {
      setActiveKey("2");
    } else if (location.pathname.startsWith("/portfolio")) {
      setActiveKey("3");
    }
  }, [location.pathname]);

  return (
    <MyHeader style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="logo">
        <Link to="/">
          <h1>SM</h1>
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[activeKey]}>
        <Menu.Item key="1" onClick={() => history.push("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="3" onClick={() => history.push("/portfolio")}>
          Portfolio
        </Menu.Item>
        <Menu.Item key="2" onClick={() => history.push("/blog")}>
          Blog
        </Menu.Item>
      </Menu>
    </MyHeader>
  );
}

export default Header;
