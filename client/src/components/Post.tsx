import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import usePost from "../dist/usePost";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import FeaturedImage from "./FeaturedImage";

function Post() {
  const params = useParams<{ slug: string }>();

  const [post, fetchPost] = usePost();

  useEffect(() => {
    fetchPost(params.slug);
  }, [fetchPost, params.slug, post.data.featured_media]);

  if (post.loading) {
    return <div>Loading</div>;
  }

  const options = {
    replace: ({ name, children }: { name: string; children: JSX.Element[] }) => {
      if (name === "pre") {
        return (
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {domToReact(children, options)}
          </SyntaxHighlighter>
        );
      }
    },
  };

  return (
    <div className="post">
      <h2>{parse(post.data.title.rendered)}</h2>
      <div className="featured">
        <FeaturedImage id={post.data.featured_media} />
      </div>
      {parse(post.data.content.rendered, options)}
    </div>
  );
}

export default Post;
