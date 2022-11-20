import React, { Component } from "react";
import "./Community.css";
import girl from "../../images/Community/girl.png";
import Image from "../../images/Community/IMAGE.png";

class Community extends Component {
  render() {
    return (
      <div className="row com_com">
        <div className="col-md-5 offset-2 Comu_nity">
          <div className=" col offset-2 mt-5 Comunity111">
            <h6>Q1 2022</h6>
            <h2>Community DAO</h2>
            <p>
              Diam vestibulum mattis aliquam, urna condimentum id. Ultrices sit
              tincidunt diam integer amet, nec facilisis nec mi. Faucibus
              posuere turpis commodo leo ipsum magnis.
            </p>
          </div>
        </div>
        <div className="col-md-3 offset Call"></div>
        <div className="row">
          <div className="row justify-content-between">
            <div className="col-md-5 offset-2 Comu_nity">
              <div className=" col offset-2 mt-5 Comunity111">
                <h6>Q2 2022</h6>
                <h2>Opening Event</h2>
                <p>
                  Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                  sit tincidunt diam integer amet, nec facilisis nec mi.
                  Faucibus posuere turpis commodo leo ipsum magnis.
                </p>
              </div>
            </div>
            <div className="col-md-3 offset Call_11">
              <img src={girl} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 offset-2 Comu_nity">
            <div className=" col offset-2 mt-5 Comunity111">
              <h6>Q1 2023</h6>
              <h2>New Nfts</h2>
              <p>
                Diam vestibulum mattis aliquam, urna condimentum id. Ultrices
                sit tincidunt diam integer amet, nec facilisis nec mi. Faucibus
                posuere turpis commodo leo ipsum magnis.
              </p>
            </div>
            <div className="col-md-3 offset Call_11">
              {/* <img src={girl} alt="" /> */}
            </div>
          </div>
          <div className="row">
            <div className="row justify-content-between">
              <div className="col-md-5 offset-2 Comu_nity">
                <div className=" col offset-2 mt-5 Comunity111">
                  <h6>Q2 2022</h6>
                  <h2>Opening Event</h2>
                  <p>
                    Diam vestibulum mattis aliquam, urna condimentum id.
                    Ultrices sit tincidunt diam integer amet, nec facilisis nec
                    mi. Faucibus posuere turpis commodo leo ipsum magnis.
                  </p>
                </div>
              </div>
              <div className="col-md-3 offset Call_11">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
