import React, { FC } from "react";
import "./App.css";
import useWp from "./lib/index";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const url = "https://samet.web.tr";

function App() {
  const WordPress = useWp(url);

  const {
    usePosts,
    usePages,
    // useComments,
    // usePostComments,
    // usePostTags,
    // useCategories,
    // useCategoryPosts,
    usePostMedia,
  } = WordPress;

  const [posts, postsLoading, postsError] = usePosts();
  console.log({ posts, postsLoading, postsError });

  const [pages, pagesLoading, pagesError] = usePages();
  console.log({ pages, pagesLoading, pagesError });

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

  // const [postMedia, postMediaLoading, postMediaError] = usePostMedia(5);
  // console.log({ postMedia, postMediaLoading, postMediaError });

  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
