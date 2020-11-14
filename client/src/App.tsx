import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useWp } from "./lib/index";

const url =
  "https://public-api.wordpress.com/wp/v2/sites/sametmutevelli.wordpress.com";

function App() {
  const WordPress = useWp(url);

  const posts = WordPress.getPosts();
  const pages = WordPress.getPages();
  const comments = WordPress.getComments();

  console.log({ posts });
  console.log({ pages });
  console.log({ comments });

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
