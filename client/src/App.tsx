import React, { Suspense } from "react";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import useWP from "use-wp";
import Loading from "./components/Loading";
// import Blog from "./components/Blog";
const Blog = React.lazy(() => import("./components/Blog"));
// import Post from "./components/Post";
const Post = React.lazy(() => import("./components/Post"));

const { Footer, Content } = Layout;

function App() {
  const WordPressProvider = useWP("https://samet.web.tr");

  return (
    <Router>
      <WordPressProvider>
        <Layout>
          <Header />
          <Layout>
            <Content>
              <Suspense fallback={<Loading />}>
                <Route path="/" exact component={Home} />
                <Route path={["/blog", "/blog/page/:page_number"]} exact component={Blog} />
                <Route path={"/blog/:slug"} exact component={Post} />
              </Suspense>
            </Content>
          </Layout>
          <Footer>life is short, birds are flying</Footer>
        </Layout>
      </WordPressProvider>
    </Router>
  );
}

export default App;
