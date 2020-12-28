import React from "react";
import { Card, List } from "antd";
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons";

function Portfolio() {
  const data = [
    // {
    //   title: "use-wp: WordPress-React Connector",
    //   description:
    //     "A React library for connecting existing WordPress blogs to a React application via WordPress's built-in REST API.",
    //   repo: "https://github.com/sametweb/use-wp",
    //   project: "https://www.npmjs.com/package/use-wp",
    // },
    {
      title: "React Step Builder",
      description:
        "A React library for creating multi-step interfaces (e.g. forms) with global state.",
      repo: "https://github.com/sametweb/react-step-builder",
      project: "https://www.npmjs.com/package/react-step-builder",
    },
    {
      title: "URL Shortener as Browser Extension",
      description:
        "A URL shortening service as a full-stack web application integrated with a Google Chrome Browser Extension.",
      repo: "https://github.com/sametweb/url-shortener",
      project: "https://omiturl.com",
    },
    {
      title: "Bio Bid Marketplace",
      description: "A Marketplace platform for clinical trials and service provider companies.",
      repo: "https://github.com/sametweb/bio-bid-be",
      project: "https://bio-bid-fe.vercel.app/",
    },
    {
      title: "ilmihal oku",
      description:
        "A web application with React and a mobile application for Android devices with React Native.",
      repo: "https://github.com/sametweb/ilmihal-native",
      project: "https://play.google.com/store/apps/details?id=com.oku.ilmihal",
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
                <a href={item.repo} target="_blank" rel="noreferrer">
                  <GithubOutlined style={{ fontSize: 18 }} />
                </a>,
                <a href={item.project} target="_blank" rel="noreferrer">
                  <DesktopOutlined style={{ fontSize: 18 }} />
                </a>,
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
