import React from "react";
import { Card, List } from "antd";
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons";

function Portfolio() {
  const data = [
    {
      title: "use-wp",
      description:
        "A React library for connecting existing WordPress blogs to a React application.",
      repo: "https://github.com/sametweb/use-wp",
      project: "https://www.npmjs.com/package/use-wp",
    },
    {
      title: "react-step-builder",
      description:
        "A React library for creating multi-step interfaces (e.g. forms) with global state.",
      repo: "https://github.com/sametweb/react-step-builder",
      project: "https://www.npmjs.com/package/react-step-builder",
    },
    {
      title: "omitURL",
      description: "A URL shortening service as a full-stack web application and Chrome Extension.",
      repo: "https://github.com/sametweb/url-shortener",
      project: "https://omiturl.com",
    },
    {
      title: "Bio Bid Marketplace",
      description: "A Marketplace platform for clinical trials and service provider companies.",
      repo: "https://github.com/sametweb/bio-bid-be",
      project: "https://bio-bid-fe.vercel.app/",
    },
  ];

  return (
    <div className="block">
      <h2>Portfolio</h2>
      <p className="welcome-text">Here are some applications I have built.</p>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.title}
              bordered={false}
              actions={[
                <GithubOutlined style={{ fontSize: 18 }} />,
                <DesktopOutlined style={{ fontSize: 18 }} />,
              ]}
            >
              {item.description}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Portfolio;
