import React from 'react';
import { useHistory } from "react-router-dom"

const BuyPop = ({ open }) => {

    let history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div>
            <button type="button" ref={ open } className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" onClick={handleClick} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div style={{ padding: 20, fontWeight: "bolder", fontSize: 25 }} className='text-center text-primary'>Thank You for purchasing products</div>
                            <div className="text-secondary text-center"> For Continoue Shopping <span onClick={handleClick} style={{ cursor: "pointer" }} className="text-primary">Click Here</span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyPop;
