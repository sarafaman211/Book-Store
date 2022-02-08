import React from 'react';
import logo from "../../config/images/deal-img.jpg"
import { Link } from "react-router-dom"

const Deal = () => {
    return (
        <>
            <div className="deal config">

                <div className="content">
                    <h3>deal of the day</h3>
                    <h1>upto 50% off</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde perspiciatis in atque dolore tempora quaerat at fuga dolorum natus velit.</p>
                    <Link to="/newArrival" className="btn btn-secondary">shop now</Link>
                </div>

                <div className="image">
                    <img src={logo} alt="" />
                </div>

            </div>
        </>
    );
};

export default Deal;
