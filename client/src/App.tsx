import React from "react";
import "./App.scss";
import useWp from "./lib/index";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";

const { Footer, Content } = Layout;

const url = "https://samet.web.tr";

function App() {
  const { usePosts, usePages } = useWp(url);

  const [posts, postsLoading, postsError] = usePosts();
  const [pages, pagesLoading, pagesError] = usePages();

  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Home />
          </Content>
        </Layout>
        <Footer>life is short, birds are flying</Footer>
      </Layout>
    </Router>
  );
}

export default App;
