import React from "react";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./components/Blog";
import Post from "./components/Post";

const { Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path={["/blog", "/blog/page/:page_number"]} exact component={Blog} />
              <Route path={"/blog/:slug"} exact component={Post} />
            </Switch>
          </Content>
        </Layout>
        <Footer>life is short, birds are flying</Footer>
      </Layout>
    </Router>
  );
}

export default App;
