import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import parseJSX from "../dist/utils/parseJSX";
import usePost from "../dist/usePost";

function Post() {
  const params = useParams<{ slug: string }>();

  const [post, fetchPost] = usePost();

  useEffect(() => {
    fetchPost(params.slug);
  }, [params.slug]);

  if (!post.data.date || post.loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h1>{parseJSX(post.data.title.rendered)}</h1>
    </div>
  );
}

export default Post;
