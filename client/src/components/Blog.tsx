import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { List, Space } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import parse from "html-react-parser";
import { usePosts, PostRequestParams } from "use-wp";
import FeaturedImage from "./FeaturedImage";
import Loading from "./Loading";

const per_page = 5;
const cat_id = 6;

const renderCommentCount = (count: number) => {
  return count < 1 ? "0 Comment" : count > 1 ? count + " Comments" : count + " Comment";
};

function Blog() {
  const [posts, fetchPosts] = usePosts();

  const { page_number } = useParams<{ page_number: string }>();
  const history = useHistory();

  const [params, setParams] = useState<PostRequestParams>({
    page: page_number,
    per_page,
    categories: cat_id,
  });

  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  useEffect(() => {
    fetchPosts(params);
  }, [fetchPosts, params]);
  return posts.loading ? (
    <Loading />
  ) : (
    <div className="blog">
      <div className="block">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            total: posts.count,
            onChange: (page) => {
              history.push("/blog/page/" + page);
              setParams({ ...params, page });
            },
            pageSize: per_page,
            defaultCurrent: Number(page_number),
          }}
          dataSource={posts.data}
          footer={<div>Total {posts.count} posts</div>}
          renderItem={(post) => {
            let commentCount;
            if (post._embedded.replies) commentCount = post._embedded.replies[0].length;
            else commentCount = 0;
            return (
              <List.Item
                key={post.id}
                actions={[
                  // <IconText icon={StarOutlined} text="156" key="star" />,
                  // <IconText icon={LikeOutlined} text="156" key="like" />,
                  <IconText
                    icon={MessageOutlined}
                    text={renderCommentCount(commentCount)}
                    key="comment"
                  />,
                ]}
                extra={<FeaturedImage width={272} id={post.featured_media} />}
              >
                <List.Item.Meta
                  title={<Link to={`/blog/${post.slug}`}>{parse(post.title.rendered)}</Link>}
                />
                {parse(post.excerpt.rendered)}
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Blog;
