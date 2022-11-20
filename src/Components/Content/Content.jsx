import React, { Component } from "react";
import logo11 from "../../images/Content/logo11.png";
import Vector from "../../images/Roadmap/Vector.png";
import nofull from "../../images/Meetour/nofull.svg";
import logo22 from "../../images/Content/logo22.png";
import logo33 from "../../images/Content/logo33.png";
import logo44 from "../../images/Content/logo44.png";
import logo55 from "../../images/Content/logo55.png";
import imgtext from "../../images/Meetour/imgtext.png";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="row content_page">
        <div className="col-11 offset-1">
          <img src={imgtext} alt="" />
        </div>
        <div className="col-md-11 offset-1">
          <h1 style={{ fontSize: "70px" }}>Exclusive Content</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6 offset-1">
            <h1>Common</h1>
            <h5 className="d-flex align-items-center" style={{ gap: "10px" }}>
              <span>Tier 1</span>
              <img src={Vector} alt="" />
              <img src={nofull} alt="" />
              <img src={nofull} alt="" />
              <img src={nofull} alt="" />
              <img src={nofull} alt="" />
            </h5>
            <p style={{ width: "50%" }}>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className="col-md-4">
            <img src={logo11} alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-11 offset-1">
          <h1 style={{ fontSize: "70px" }}>Uncommon</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6 offset-1">
            <h5 className="d-flex align-items-center" style={{ gap: "10px" }}>
              <span>Tier 2</span>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={nofull} alt="" />
              <img src={nofull} alt="" />
            </h5>
            <p style={{ width: "50%" }}>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className="col-md-4">
            <img src={logo22} alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-11 offset-1">
          <h1 style={{ fontSize: "70px" }}>Rare</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6 offset-1">
            <h5 className="d-flex align-items-center" style={{ gap: "10px" }}>
              <span>Tier 3</span>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={nofull} alt="" />
            </h5>
            <p style={{ width: "50%" }}>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className="col-md-4">
            <img src={logo33} alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-11 offset-1">
          <h1 style={{ fontSize: "70px" }}>Very Rare</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4 offset-1">
            <h5 className="d-flex align-items-center" style={{ gap: "10px" }}>
              <span>Tier 4</span>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={nofull} alt="" />
            </h5>
            <p style={{ width: "50%" }}>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className="col-md-6">
            <img src={logo44} alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-11 offset-1">
          <h1 style={{ fontSize: "70px" }}>Legendary</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-4 offset-1">
            <h5 className="d-flex align-items-center" style={{ gap: "10px" }}>
              <span>Tier 2</span>
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
              <img src={Vector} alt="" />
            </h5>
            <p style={{ width: "50%" }}>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
          <div className="col-md-6">
            <img src={logo55} alt="" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}
