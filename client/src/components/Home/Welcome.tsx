import { Tooltip } from "antd";
import React from "react";

function Welcome() {
  const images = {
    python: "Python",
    js: "JavaScript",
    ts: "TypeScript",
    react: "React / React Native",
    redux: "Redux",
    node: "Node.js",
    postgresql: "PostgreSQL",
    graphql: "GraphQL",
    jest: "Jest",
    html: "HTML",
    css: "CSS",
    sass: "SASS / SCSS",
    mui: "Material UI",
    antd: "Ant Design",
  };
  return (
    <div className="block">
      <h2>Welcome!</h2>
      <p className="welcome-text">
        This is Samet. I am a software engineer specializing in web applications using
        JavaScript/TypeScript.
      </p>
      <p>
        {Object.entries(images).map(([img, alt]) => {
          return (
            <Tooltip placement="top" title={alt} key={img}>
              <img src={`images/${img}.png`} alt={alt} style={{ width: 50, margin: 10 }} />
            </Tooltip>
          );
        })}
      </p>
    </div>
  );
}

export default Welcome;
