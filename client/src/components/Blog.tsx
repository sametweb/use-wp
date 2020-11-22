import React from "react";
import { Link } from "react-router-dom";
import { List, Space } from "antd";
import useWp from "../lib";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

const url = "https://samet.web.tr";

function Blog() {
  const { usePosts } = useWp(url);
  const [posts, postsLoading, postsError] = usePosts();

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
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 1,
          }}
          dataSource={posts}
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
                title={<Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link>}
                description={post.date}
              />
              {post.excerpt.rendered}
            </List.Item>
          )}
        />
        {/* <List
          size="large"
          itemLayout="horizontal"
          dataSource={posts.filter((_, i) => i < 3)}
          loading={postsLoading}
          renderItem={(post) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link className="blog-post-title" to={post.slug}>
                    {post.title.rendered}
                  </Link>
                }
                description={post.excerpt.rendered}
              />
            </List.Item>
          )}
        /> */}
      </div>
    </div>
  );
}

export default Blog;
