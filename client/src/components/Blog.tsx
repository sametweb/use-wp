import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { List, Space } from "antd";
import useWp from "../lib";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { IPostQueryParams } from "../lib/types";
import parseJSX from "../dist/utils/parseJSX";

const url = "https://samet.web.tr";

function Blog() {
  const { page_number } = useParams<{ page_number: string }>();
  const history = useHistory();

  const { usePosts } = useWp(url);

  const [params, setParams] = useState<IPostQueryParams>({ page: page_number, per_page: 3 });
  const [posts, postsLoading, postsError] = usePosts(params);

  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="blog">
      <div className="block">
        <List
          itemLayout="vertical"
          loading={postsLoading}
          size="large"
          pagination={{
            total: posts.total,
            onChange: (page) => {
              history.push("/blog/page/" + page);
              setParams({ ...params, page });
            },
            pageSize: 3,
            defaultCurrent: Number(page_number),
          }}
          dataSource={posts.data}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(post) => (
            <List.Item
              key={post.id}
              actions={[
                <IconText icon={StarOutlined} text="156" key="star" />,
                <IconText icon={LikeOutlined} text="156" key="like" />,
                <IconText icon={MessageOutlined} text="2" key="comment" />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={
                  <Link to={{ pathname: `/blog/${post.slug}`, state: post }}>
                    {parseJSX(post.title.rendered)}
                  </Link>
                }
                description={post.date}
              />
              {parseJSX(post.excerpt.rendered)}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Blog;
