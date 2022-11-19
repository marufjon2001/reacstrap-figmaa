import React, { Component } from "react";
import Vector from "../../images/Roadmap/Vector.png";
class Roadmap extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <div className="col-md d-flex justify-content-center flex-column align-items-center">
          <img src={Vector} alt="" />
          <h5 className="text-center">Releases</h5>
          <h1 className="align-items-center">Our Roadmap</h1>
        </div>
      </div>
    );
  }
}

export default Roadmap;
