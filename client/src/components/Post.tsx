import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "use-wp";
import parse, { domToReact } from "html-react-parser";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import FeaturedImage from "./FeaturedImage";
import Loading from "./Loading";

function Post() {
  const params = useParams<{ slug: string }>();

  const [post, fetchPost] = usePost();

  useEffect(() => {
    fetchPost(params.slug);
  }, [fetchPost, params.slug]);

  useEffect(() => {
    if (post.data.title?.rendered) {
      document.title =
        post.data.title.rendered.replace(/(<([^>]+)>)/gi, "") + " | " + document.title;
    }
  }, [post.data.title?.rendered]);

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
  return post.loading ? (
    <Loading />
  ) : (
    <div className="post">
      <h2>{parse(post.data.title.rendered)}</h2>
      <div className="featured">
        <FeaturedImage width={"100%"} id={post.data.featured_media} />
      </div>
      {parse(post.data.content.rendered, options)}
      <h2>Comments</h2>
      {post.data._embedded.replies &&
        post.data._embedded.replies[0].map((reply) =>
          parse("<b>" + reply.author_name + "</b> " + reply.content.rendered)
        )}
    </div>
  );
}

export default Post;
