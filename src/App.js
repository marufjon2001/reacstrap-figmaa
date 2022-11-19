import React, { Component } from "react";
import Collection from "./Components/Collection/Collection";
import Community from "./Components/Community/Community"
import Content from "./Components/Content/Content";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Roadmap from "./Components/Roadmap/Roadmap";

class App extends Component {
  render() {
    return (
      <div className="cantainer">
        <Navbar />
        <Home />
        <Collection />
        <Content />
        <Roadmap />
        <Community/>
      </div>
    );
  }
}

export default App;
