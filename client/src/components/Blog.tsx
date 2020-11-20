import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import useWp from "../lib";

const url = "https://samet.web.tr";

function Blog() {
  const { usePosts } = useWp(url);
  const [posts, postsLoading, postsError] = usePosts();

  return (
    <div className="blog">
      <div className="block">
        <List
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
        />
      </div>
    </div>
  );
}

export default Blog;
