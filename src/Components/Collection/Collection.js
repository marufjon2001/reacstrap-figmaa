import React, { Component } from "react";
import Meet from "../../images/Collection/Meet.png";
import "./Collection.css";

class Collection extends Component {
  render() {
    return (
      <div className="row CollectionComp">
        <div className="text_1"><br/><br/>
          <h2 className="text-center py-3">Collection</h2><br/><br/><br/>
        </div>
        <br/>
        <h1 className="text-center pb-3 text_big">Meet Our Bored Peeps!</h1>
        <div className="row">
          <div className="col-md-5 offset-1">
            <div className="row mt-5">
              <div className="col-md-8 mt-5">
                <h2 className="mt-5">6500 Bored Peeps</h2>
                <p>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <h2>6500 Bored Peeps</h2>
                <p>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <h2>6500 Bored Peeps</h2>
                <p>
                  Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh
                  amet proin in tristique. Ipsum morbi adipiscing faucibus eu
                  odio in tellus risus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <br/><br/><br/>
            <img src={Meet} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
