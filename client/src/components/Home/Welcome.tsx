import React from "react";

import LanguageLogoRenderer from "../LanguageLogoRenderer";

function Welcome() {
  const images = [
    { name: "Python", level: 50 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 70 },
    { name: "React / React Native", level: 90 },
    { name: "Redux", level: 90 },
    { name: "HTML", level: 97 },
    { name: "CSS", level: 95 },
    { name: "Node.js & Express", level: 75 },
    { name: "PostgreSQL", level: 65 },
    { name: "GraphQL", level: 50 },
    { name: "Jest", level: 70 },
    { name: "SASS / SCSS", level: 90 },
    { name: "Material UI", level: 80 },
    { name: "Ant Design", level: 90 },
  ];

  return (
    <div className="block">
      <h2>Welcome!</h2>
      <p className="welcome-text">
        My name is Samet Mütevelli. I am a software engineer specializing in full-stack web
        applications with JavaScript and TypeScript. These are the languages, frameworks, and
        libraries I am familiar with.
      </p>
      {images.map(({ name, level }, index) => {
        return (
          <LanguageLogoRenderer
            key={name}
            alt={name}
            level={level}
            index={index}
            size={80}
            margin={20}
          />
        );
      })}
    </div>
  );
}

export default Welcome;
