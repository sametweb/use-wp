import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List } from "antd";
import useWp from "../../lib";
import { IPostQueryParams } from "../../lib/types";
import parseJSX from "../../dist/utils/parseJSX";

const url = "https://samet.web.tr";

function Blog() {
  const { usePosts } = useWp(url);
  const [params] = useState<IPostQueryParams>({ per_page: 3 });
  const [posts, postsLoading, postsError] = usePosts(params);

  return (
    <div className="block">
      <h2>Blog</h2>
      <p className="welcome-text">
        I write blog posts about things I find exciting. Here are recent my posts.
      </p>
      {postsError && <p>{postsError}</p>}
      <List
        size="large"
        itemLayout="horizontal"
        dataSource={posts.data}
        loading={postsLoading}
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
