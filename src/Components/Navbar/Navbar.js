import React, { Component } from 'react';
import Logo from '../../images/log/logo.png'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='row align-items-center mt-3 mx-4 Navbar'>
                <div className="col">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="col">
                    <ul className='d-flex align-items-md-start justify-content-md-end gap-5'>
                        <li><a href="">Collect <br /> ion</a></li>
                        <li><a href="">Cont <br /> ent</a></li>
                        <li><a href="">Road <br /> map</a></li>
                        <li><a href="">Team</a></li>
                        <button className='btn btn-danger' >Opensea</button>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
