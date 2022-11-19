import React, { Component } from 'react';
import "./Meetour.css"
import Vector from "../../images/Roadmap/Vector.png"


class Meetour extends Component {
    render() {
        return (
            <div className='row container-fluid'>
                <div className='col-md d-flex justify-content-center flex-column align-items-center Meetour'>
                    <img src={Vector} alt="" />
                    <h5>Team</h5>
                    <h1>Meet Our Team</h1>
                </div>
            </div>
        );
    }
}

export default Meetour;
