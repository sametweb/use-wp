import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header: MyHeader } = Layout;

function Header() {
  const location = useLocation();

  useEffect(() => {
    function offset(el: any) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    // example use
    if (location.hash) {
      var div = document.querySelector(location.hash);
      var element = offset(div);
      window.scrollTo(element.left, element.top);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <MyHeader
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="logo">
        <Link to="/">
          <img
            src="./logo32.png"
            width="32"
            height="32"
            alt="Logo for Samet Mutevelli's Portfolio"
          />
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={{ pathname: "/", hash: "#portfolio" }}>Portfolio</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={{ pathname: "/", hash: "#blog" }}>Blog</Link>
        </Menu.Item>
      </Menu>
    </MyHeader>
  );
}

export default Header;
