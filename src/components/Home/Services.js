import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="icons-container">

                <div className="container d-flex justify-content-around align-items-center">
                    <div className="icons" style={{ colors: "#fff" }}>
                        <i className="fas fa-shipping-fast"></i>
                        <div className="content">
                            <h3>free shipping</h3>
                            <p>order over &#x20B9;1000</p>
                        </div>
                    </div>

                    <div className="icons" style={{ colors: "#fff" }}>
                        <i className="fas fa-lock"></i>
                        <div className="content">
                            <h3>secure payment</h3>
                            <p>100 secure payment</p>
                        </div>
                    </div>

                    <div className="icons" style={{ colors: "#fff" }}>
                        <i className="fas fa-redo-alt"></i>
                        <div className="content">
                            <h3>easy returns</h3>
                            <p>10 days returns</p>
                        </div>
                    </div>

                    <div className="icons" style={{ colors: "#fff" }}>
                        <i className="fas fa-headset"></i>
                        <div className="content">
                            <h3>24/7 support</h3>
                            <p>call us anytime</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
