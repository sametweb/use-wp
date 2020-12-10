import React from "react";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Post from "./components/Post";
import useWp from "./lib/useWp";

const { Footer, Content } = Layout;

function App() {
  const WordPressProvider = useWp("https://samet.web.tr");

  return (
    <Router>
      <WordPressProvider>
        <Layout>
          <Header />
          <Layout>
            <Content>
              <Route path="/" exact component={Home} />
              <Route path={"/blog"} exact component={Blog} />
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
