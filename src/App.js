import React, { Component } from "react";
import Collection from "./Components/Collection/Collection";
import Community from "./Components/Community/Community";
import Content from "./Components/Content/Content";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Ourteam from "./Components/Ourtem/Ourteam";
import Roadmap from "./Components/Roadmap/Roadmap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Collection />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FBF1E6"
            fill-opacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,170.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <Content />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FBF1E6"
            fill-opacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,170.7C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Roadmap />
        <Community />
        <Ourteam />
      </div>
    );
  }
}

export default App;
