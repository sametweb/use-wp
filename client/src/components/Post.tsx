import React, { useEffect } from "react";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";
import parseJSX from "../dist/utils/parseJSX";
import { IPost } from "../lib/types";
import usePost from "../lib/usePost";

function Post() {
  const { state } = useLocation<IPost>();
  const params = useParams<{ slug: string }>();

  const [post, fetchPost] = usePost();

  console.log({ post });

  useEffect(() => {
    fetchPost(params.slug);
  }, []);

  if (post.loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{parseJSX(post.data.title.rendered)}</h1>
    </div>
  );
}

export default Post;
