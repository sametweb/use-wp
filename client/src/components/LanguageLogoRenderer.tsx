import { Tooltip } from "antd";
import React from "react";

interface LanguageLogoRendererProps {
  index: number;
  size: number;
  margin: number;
  alt: string;
  level: number;
}

const LanguageLogoRenderer = ({ alt, index, size, margin, level }: LanguageLogoRendererProps) => {
  return (
    <>
      <Tooltip placement="top" title={alt} openClassName="hovered">
        <span
          className="language-logo"
          style={{
            backgroundPosition: `-${index * 80}px`,
            width: size,
            height: size,
            margin,
            marginBottom: margin + margin,
            marginTop: 0,
            display: "inline-block",
          }}
        >
          <span className="bar" style={{ width: `${level}%` }}>
            {level}%
          </span>
        </span>
      </Tooltip>
    </>
  );
};

export default LanguageLogoRenderer;
