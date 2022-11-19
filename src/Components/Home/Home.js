import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className='row HomeComp'>
                <div className="col-md d-flex justify-content-center flex-column align-items-center">
                    <h4 className='text-center'>NFT Collection</h4>
                    <h1 className='text-center text_big'>Bored <br /> NFT Peeps</h1>
                    <p className='text-center text-p'>Tempor interdum sed nisl aliquam ut orci feugiat neque. Nibh amet proin in tristique. Ipsum morbi adipiscing faucibus eu odio in tellus risus.</p>
                    <button className='btn btn-danger'>OpenSea</button>
                </div>
            </div>
        );
    }
}

export default Home;
