import React from 'react';
import MidSlide from '../Books/MidSlide';
import AliceCarousel from 'react-alice-carousel';
import { BANNER_IMAGE_2, BANNER_IMAGE_3, BANNER_IMAGE_4 } from '../../config/data';
import Deal from '../Home/Deal';
import FeatureBooks from '../Books/FeatureBooks';
import { Link } from "react-router-dom";
import Services from  "../Home/Services"

const Home = () => {

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 1,
    }
  }

  const items = [
    <img src={BANNER_IMAGE_2} style={{ height: 350, width: "100%", padding: 15, background: "silver" }} onDragStart={handleDragStart} />,
    <img src={BANNER_IMAGE_3} style={{ height: 350, width: "100%", padding: 15, background: "silver" }} onDragStart={handleDragStart} />,
    <img src={BANNER_IMAGE_4} style={{ height: 350, width: "100%", padding: 15, background: "silver" }} onDragStart={handleDragStart} />,
  ];

  return (
    <>
      <div className='banner'>
        <div>
          <AliceCarousel infinite autoPlay animationDuration={1500} disableButtonsControls disableDotsControls responsive={responsive} items={items} />
        </div>
        );
      </div>

     <Services />

      <Deal />

      <div className='Books'>
        <h2 className='heading text-center text-primary pb-3'>BOOKS <i className="fas fa-book text-success"></i></h2>
        <MidSlide />
        <div>
        </div>
      </div>

      <div className='newsletter'>
        <form >
          <h3>SubScribe for mor purchase</h3>
          <input type="email" name="" placeholder="enter your email" className="box" />
          <Link to="/login" type="submit" value="subscribe" className="btn btn-primary">Subscribe</Link>
        </form>
      </div>


      <FeatureBooks />

    </>
  );
};

export default Home;
