import React from "react";
import Blog from "./Home/Blog";
import Portfolio from "./Home/Portfolio";
import Welcome from "./Home/Welcome";

function Home() {
  return (
    <React.Fragment>
      <div className="home">
        <Welcome />
      </div>
      <div id="portfolio" className="home dark-bg">
        <Portfolio />
      </div>
      <div id="blog" className="home">
        <Blog />
      </div>
    </React.Fragment>
  );
}

export default Home;
