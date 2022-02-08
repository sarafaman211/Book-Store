import React, { useContext, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import User from '../Account/User';
import ProductContext from "../../contexts/productContext";

const Navbar = (props) => {

    let location = useLocation();

    let history = useHistory();

    const { items } = useContext(ProductContext)

    const handleLogout = () => {
        localStorage.removeItem("token")
        history.push("/")
        props.alerts("Logged out", "success")
    }

    const handleClick = () => {
        history.push("/cart")
    }

    let ref = useRef(null)

    const updateModal = () => {
        ref.current.click()
    }
    

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                <div className="container">
                    <Link className="navbar-brand" style={{ fontSize: 20, fontWeight: "bolder" }} to="/"> <i className="fas fa-book text-success"></i> {props.heading}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/newArrival" ? "active" : ""}`} to="/newArrival">New-Arrival</Link>
                            </li>
                        </ul>

                        <div className="d-flex">
                            <button onClick={updateModal} type="button" className="btn btn-secondary mx-3" to="/user" style={{ fontSize: 20, borderRadius: "50%" }}><i style={{ paddingLeft: 5, paddingRight: 5 }} className="fas fa-user-alt"></i> </button>

                            <button type="button" onClick={handleClick} className="btn btn-primary mx-5">
                                <i style={{ fontSize: 20, cursor: "pointer", padding: 5 }} className="fas fa-shopping-cart"></i> <span style={{ fontSize: 15, textAlign: "center" }} className="badge badge-light text-warning"> {items < 0 ? items.length : "0"} </span>
                            </button>
                        </div>

                        {!localStorage.getItem("token") ? < Link type='button' className='btn btn-secondary mx-2' to="/login" style={{ fontSize: 20 }} >Login</Link> : <button onClick={handleLogout} className='btn btn-secondary' style={{ fontSize: 20, fontWeight: "bolder" }} >Logout</button>}

                    </div>

                </div>

            </nav>

            <User open={ref} />
        </>
    );
};

export default Navbar;
