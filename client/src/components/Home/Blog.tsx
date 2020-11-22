import React from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import useWp from "../../lib";

const url = "https://samet.web.tr";

function Blog() {
  const { usePosts } = useWp(url);
  const [posts, postsLoading, postsError] = usePosts();

  return (
    <div className="block">
      <h2>Blog</h2>
      <p className="welcome-text">
        I write blog posts about things I find exciting. Here are recent my posts.
      </p>
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={posts.filter((post, i) => i < 3)}
        loading={postsLoading}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link className="blog-post-title" to={"/blog/" + post.slug}>
                  {post.title.rendered}
                </Link>
              }
              description={post.excerpt.rendered}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Blog;
