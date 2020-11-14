import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useComments, usePages, usePosts } from "./lib/index";

const url =
  "https://public-api.wordpress.com/wp/v2/sites/sametmutevelli.wordpress.com";

function App() {
  const [posts, postsLoading, postsError] = usePosts(url);
  console.log({ posts, postsLoading, postsError });

  const [pages, pagesLoading, pagesError] = usePages(url);
  console.log({ pages, pagesLoading, pagesError });

  const [comments, commentsLoading, commentsError] = useComments(url);
  console.log({ comments, commentsLoading, commentsError });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
