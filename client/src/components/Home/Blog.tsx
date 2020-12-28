import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import { usePosts, PostRequestParams } from "use-wp";
import parse from "html-react-parser";

function Blog() {
  const [params] = useState<PostRequestParams>({ per_page: 3 });
  const [posts, fetchPosts] = usePosts();

  useEffect(() => {
    fetchPosts(params);
  }, [fetchPosts, params]);

  return (
    <div className="block">
      <h2>Blog</h2>
      <p className="welcome-text">
        I write blog posts about things I find exciting. Here are recent my posts.
      </p>
      {posts.error && <p>{posts.error}</p>}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={posts.data}
        loading={posts.loading}
        renderItem={(post) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link className="blog-post-title" to={"/blog/" + post.slug}>
                  {parse(post.title.rendered)}
                </Link>
              }
              description={[
                <React.Fragment key="parsed-content">
                  {parse(post.excerpt.rendered)}
                </React.Fragment>,
                <Link key="read-more" to={"/blog/" + post.slug}>
                  Read More
                </Link>,
              ]}
            />
          </List.Item>
        )}
      />
      <p>
        <Link to="/blog">Read all blog posts</Link>
      </p>
      <p>
        The posts are received from my WordPress blog at{" "}
        <a href="https://www.samet.web.tr">samet.web.tr</a> via WordPress's REST API.
      </p>
    </div>
  );
}

export default Blog;
