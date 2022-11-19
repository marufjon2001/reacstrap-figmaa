import React, { Component } from "react";
import logo from "../../images/Content/logo.svg";
import logo11 from "../../images/Content/logo11.png";
import logo22 from "../../images/Content/logo22.png";
import logo33 from "../../images/Content/logo33.png";
import logo44 from "../../images/Content/logo44.png";
import logo55 from "../../images/Content/logo55.png";
import logo1 from "../../images/Content/logo1.svg";
import "./Content.css";

export default class Content extends Component {
  render() {
    return (
      <div className="row container-fluid">
        <img src={logo} alt="" />
        <div className="col-md-4 bac"></div>
        <div className="col-md-8 bac_1">
          <h4>Rarity</h4>
          <h1>Exclusive Content</h1>
          <hr />
          <div className="row d-flex justify-content-between">
            <div className="col-md-4">
              <h1>Common</h1>
              <h5>Tier 1</h5>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="col-md-6 logo11">
              <img src={logo11} alt="" />
              <br />
              <br />
              <br />{" "}
            </div>
            <hr />
            <div className="row d-flex justify-content-between">
              <div className="col-md-4">
                <h1>Uncommon</h1>
                <h5>Tier 2</h5>
                <p>
                  Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                  sit tincidunt diam integer amet, nec facilisis nec mi.
                  Faucibus posuere turpis commodo leo ipsum magnis.
                </p>
              </div>
              <div className="col-md-8 d-flex justify-content-end logo22">
                <br />
                <br /> <img src={logo22} alt="" />
              </div>
              <hr />
              <div className="row d-flex justify-content-between  logo33">
                <div className=" col-md-4">
                  <h1>Rare</h1>
                  <h5>Tier 3</h5>
                  <p>
                    Diam vestibulum mattis aliquam, urna condimentum id.
                    Ultrices sit tincidunt diam integer amet, nec facilisis nec
                    mi. Faucibus posuere turpis commodo leo ipsum magnis.
                  </p>
                </div>
                <div className=" col-md-6 d-flex justify-content-end logo33">
                  <img src={logo33} alt="" />
                </div>
                <hr />
                <div className="row d-flex justify-content-between">
                  <div className="col md-4">
                    <h1>Very Rare</h1>
                    <h5>Tier 4</h5>
                    <p>
                      Diam vestibulum mattis aliquam, urna condimentum id.
                      Ultrices sit tincidunt diam integer amet, nec facilisis
                      nec mi. Faucibus posuere turpis commodo leo ipsum magnis.
                    </p>
                  </div>
                  <div className="col md-6 d-flex justify-content-end logo44">
                    <img src={logo44} alt="" />
                  </div>
                  <hr />
                  <div className="row justify-content-between">
                    <div className="col md-4">
                      <h1>logo44 </h1>
                      <h5>Tier 1</h5>
                      <p>
                        Diam vestibulum mattis aliquam, urna condimentum id.
                        Ultrices sit tincidunt diam integer amet, nec facilisis
                        nec mi. Faucibus posuere turpis commodo leo ipsum
                        magnis.
                      </p>
                    </div>
                    <div className="col md-6 d-flex justify-content-end align-item-center logo55">
                      <img src={logo55} alt="" />
                      <hr />
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <img src={logo1} alt="" />
        </div>
      </div>
    );
  }
}
