import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import ProductContext from '../../contexts/productContext';

const BooksComp = ({ books, alerts}) => {

    const { title, author, imageLink, amount, year } = books

    const { addProducts } = useContext(ProductContext)

    const handleClick = () => {
        if(localStorage.getItem("token")){
            alerts("Product added to the cart", "success")
            addProducts({ title: title, author: author, amount: amount, year: year })
        }else{
            alerts("You must login to add products in the cart", "danger")
        }
    }

    return (

        <div className='col-md-3 g-3'>
            <div className="card" style={{ width: "25rem", padding: 10 }}>
                <img src={imageLink ? imageLink : "No Image Found"} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text text-secondary">Author: { author }</p>
                        <Link to="/cart" onClick={ handleClick } className="btn btn-primary"> Add to Cart </Link>
                    </div>
            </div>
        </div>
    );
};

export default BooksComp;
