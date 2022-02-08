import React, { useContext } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
// import books from '../../config/data';
import ProductContext from '../../contexts/productContext';
import BooksComp from '../comp/BooksComp';

const FeatureBooks = () => {

    const { product } = useContext(ProductContext)

    const responsive = {
        0: {
            items: 1
        },
        524: {
            items: 3
        }
    }

    const items = product.map(books => {
        return (
            <Link to="/newArrival" style={{ textDecoration: "none" }}>
                <BooksComp books={books} />
            </Link>  
        )
    })

    return (
        <div>
            <div className="featured">

                <h1 className="heading p-4 text-center"> <span className='toUppercase text-primary'>Featured Books <i className="fas fa-draw-polygon text-success"></i></span> </h1>

                <hr />

                <div className='p-3'>
                    <AliceCarousel autoPlay disableButtonsControls disableDotsControls infinite animationDuration={2000} responsive={responsive} items={items} />
                </div>

            </div>
        </div>
    );
};

export default FeatureBooks;
