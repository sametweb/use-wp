import React from "react";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Post from "./components/Post";
import useWP from "use-wp";

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
              <Route path="/" exact component={Home} />
              <Route path={["/blog", "/blog/page/:page_number"]} exact component={Blog} />
              <Route path={"/blog/:slug"} exact component={Post} />
            </Content>
          </Layout>
          <Footer>life is short, birds are flying</Footer>
        </Layout>
      </WordPressProvider>
    </Router>
  );
}

export default App;
