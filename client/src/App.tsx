import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useComments,
  usePages,
  usePosts,
  usePostComments,
  usePostTags,
  useCategories,
} from "./lib/index";

const url = "https://public-api.wordpress.com/wp/v2/sites/sametmutevelli.wordpress.com";

function App() {
  const [posts, postsLoading, postsError] = usePosts(url);
  console.log({ posts, postsLoading, postsError });

  // const [pages, pagesLoading, pagesError] = usePages(url);
  // console.log({ pages, pagesLoading, pagesError });

  // const [comments, commentsLoading, commentsError] = useComments(url);
  // console.log({ comments, commentsLoading, commentsError });

  // const [
  //   postComments,
  //   postCommentsLoading,
  //   postCommentsError,
  // ] = usePostComments(url, 35);

  // console.log({ postComments, postCommentsLoading, postCommentsError });

  // const [postTags, postTagsLoading, postTagsError] = usePostTags(url, 35);
  // console.log({ postTags, postTagsLoading, postTagsError });

  // const [categories, categoriesLoading, categoriesError] = useCategories(url);
  // console.log({ categories, categoriesLoading, categoriesError });

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <React.Fragment key={post.id}>
            <h1>{post.title.rendered}</h1>
            <h3>{post.excerpt.rendered}</h3>
            {post.content.rendered}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
