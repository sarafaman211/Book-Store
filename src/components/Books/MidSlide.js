import React, { useContext, useEffect } from 'react';
import AliceCarousel from "react-alice-carousel";
// import books from "../config/data";
import MideSildeCom from '../comp/MideSildeCom';
import { Link } from "react-router-dom"
import ProductContext from '../../contexts/productContext';

const MidSlide = () => {

    const { product, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, []);


    const responsive = {
        0: {
            items: 1,
        },
        524: {
            items: 8
        }
    }

    const items = product.map(books => {
        // console.log(books)
        return (
            <Link to={`/newArrival`} style={{ textDecoration: "none" }}>
                <MideSildeCom books={books} />
            </Link>
        )
    })


    return (
        <div>
            <AliceCarousel infinite autoPlay autoPlayInterval={1000} disableButtonsControls animationDuration={1500} disableDotsControls responsive={responsive} items={items} />
        </div>
    );
};

export default MidSlide;
