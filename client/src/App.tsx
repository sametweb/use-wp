import React from "react";
import "./App.css";
import useWp from "./lib/index";

const url = "https://samet.web.tr";

function App() {
  const WordPress = useWp(url);

  const {
    usePosts,
    // usePages,
    // useComments,
    // usePostComments,
    // usePostTags,
    // useCategories,
    // useCategoryPosts,
    usePostMedia,
  } = WordPress;

  const [posts, postsLoading, postsError] = usePosts();
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

  // const [catPosts, catPostsLoading, catPostsError] = useCategoryPosts(url, 1063);
  // console.log({ catPosts, catPostsLoading, catPostsError });

  const [postMedia, postMediaLoading, postMediaError] = usePostMedia(5);
  console.log({ postMedia, postMediaLoading, postMediaError });

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
