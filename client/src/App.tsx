import React from "react";
import "./App.scss";
import { Layout } from "antd";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog";

const { Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
          </Content>
        </Layout>
        <Footer>life is short, birds are flying</Footer>
      </Layout>
    </Router>
  );
}

export default App;
