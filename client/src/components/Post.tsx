import React from "react";
import { useLocation } from "react-router-dom";
import parseJSX from "../dist/utils/parseJSX";
import { IPost } from "../lib/types";

function Post() {
  const { state } = useLocation<IPost>();

  console.log(state);
  return (
    <div>
      <h1>{parseJSX(state.title.rendered)}</h1>
    </div>
  );
}

export default Post;
