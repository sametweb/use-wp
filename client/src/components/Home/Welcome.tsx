import React from "react";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Col, Row } from "antd";

import LanguageLogoRenderer from "../LanguageLogoRenderer";

function Welcome() {
  const images = [
    { name: "Python", level: 50 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 70 },
    { name: "React / React Native", level: 90 },
    { name: "Redux", level: 90 },
    { name: "Node.js & Express", level: 75 },
    { name: "HTML", level: 97 },
    { name: "CSS", level: 95 },
    { name: "SASS / SCSS", level: 90 },
    { name: "PostgreSQL", level: 65 },
    { name: "GraphQL", level: 50 },
    { name: "Jest", level: 70 },
    { name: "Material UI", level: 80 },
    { name: "Ant Design", level: 90 },
  ];

  const socialIcons = [
    {
      href: "https://linkedin.com/in/samet-mutevelli",
      component: LinkedinFilled,
      color: "#0073b1",
    },
    {
      href: "https://github.com/sametweb",
      component: GithubFilled,
      color: "#24292e",
    },
    {
      href: "https://twitter.com/sametmutevelli",
      component: TwitterSquareFilled,
      color: "rgb(29, 161, 242)",
    },
    {
      href: "https://youtube.com/c/reactdersleri",
      component: YoutubeFilled,
      color: "rgb(255, 0, 0)",
    },
  ];

  return (
    <div className="block">
      <p className="social-icons">
        {socialIcons.map(({ href, component: Component, color }) => {
          return (
            <a href={href} target="_blank" rel="noreferrer">
              <Component style={{ fontSize: 40, color }} />
            </a>
          );
        })}
      </p>
      <h2>Welcome!</h2>
      <p className="welcome-text">
        My name is Samet Mütevelli. I am a software developer specializing in full-stack web
        applications with JavaScript and TypeScript. These are the languages, frameworks, and
        libraries I am familiar with.
      </p>
      <Row justify="center">
        {images.map(({ name, level }, index) => {
          return (
            <Col xs={12} sm={8} md={4} key={name}>
              <LanguageLogoRenderer alt={name} level={level} index={index} size={80} margin={20} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Welcome;
