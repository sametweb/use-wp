import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import parseJSX from "../../dist/utils/parseJSX";
import usePosts from "../../dist/usePosts";
import { PostRequestParams } from "../../dist/types";

function Blog() {
  const [params] = useState<PostRequestParams>({ per_page: 3 });
  const [posts, fetchPosts] = usePosts();

  useEffect(() => {
    fetchPosts(params);
  }, []);

  return (
    <div className="block">
      <h2>Blog</h2>
      <p className="welcome-text">
        I write blog posts about things I find exciting. Here are recent my posts.
      </p>
      {posts.error && <p>{posts.error}</p>}
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={posts.data}
        loading={posts.loading}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link className="blog-post-title" to={"/blog/" + post.slug}>
                  {parseJSX(post.title.rendered)}
                </Link>
              }
              description={parseJSX(post.excerpt.rendered)}
            />
          </List.Item>
        )}
      />
      <p>
        <Link to="/blog">Read all blog posts</Link>
      </p>
    </div>
  );
}

export default Blog;
