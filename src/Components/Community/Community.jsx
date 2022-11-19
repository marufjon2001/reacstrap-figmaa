import React, { Component } from "react";
import "./Community.css";

class Community extends Component {
  render() {
    return (
      <div className="row container-fluid d-flex">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-8 community">
              <h6>Q1 2022</h6>
              <h1>Community DAO</h1>
              <p>
                Diam vestibulum mattis aliquam, <br /> urna condimentum id.
                Ultrices sit <br /> tincidunt diam integer amet, nec <br />{" "}
                facilisis nec mi. Faucibus posuere <br /> turpis commodo leo
                ipsum magnis.
              </p>
            </div>
            <div className="col-md-4 community11"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 opening">
                <h6>Q2 2022</h6>
                <h1>Opening Event</h1>
                <p>
                  Diam vestibulum mattis aliquam, urna <br /> condimentum id.
                  Ultrices sit tincidunt diam integer amet, nec <br /> facilisis
                  nec mi. Faucibus posuere <br /> turpis commodo leo ipsum
                  magnis.
                </p>
              </div>
              <div className="col-md-6 imgirl d-flex justify-content-end "></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-7 charity">
                <h6>Q3 2022</h6>
                <h1>Charity Donation</h1>
                <p>
                  Diam vestibulum mattis aliquam, urna <br /> condimentum id.
                  Ultrices sit tincidunt diam integer amet, nec <br /> facilisis
                  nec mi. Faucibus posuere <br /> turpis commodo leo ipsum
                  magnis.
                </p>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-6 opening">
                <h6>Q2 2023</h6>
                <h1>Metaverse</h1>
                <p>
                  Diam vestibulum mattis aliquam, urna <br /> condimentum id.
                  Ultrices sit tincidunt diam integer amet, nec <br /> facilisis
                  nec mi. Faucibus posuere <br /> turpis commodo leo ipsum
                  magnis.
                </p>
              </div>
              <div className="col-md-6 first d-flex justify-content-end "></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
