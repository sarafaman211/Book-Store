import React, { useContext } from 'react';
// import books from '../../config/data';
import BooksComp from '../comp/BooksComp';
import MidSlide from '../Books/MidSlide';
import ProductContext from '../../contexts/productContext';


const NewArrival = ({ alerts }) => {

  const { product } = useContext( ProductContext )

  return (
    <div className='container p-5'>
      <div>
        <h2 className='heading text-primary fw-bolder text-center my-3'>New-Arrival <i className="fas fa-database text-success"></i></h2>

        <div style={{ fontWeight: "bolder", color: "red", height: 10}}> <hr /> </div>

        <MidSlide />
        
      </div>

      <div className='row'>
        <h2 className='heding text-center text-primary my-4'> Books Collections </h2>
        {product.map(books => {
          return (
            <BooksComp key={books._id} books={books} alerts={ alerts }/>
          )
        })}
      </div>
    </div>
  );
};

export default NewArrival;
