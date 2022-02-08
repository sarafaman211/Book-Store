import React, { useContext, useEffect, useRef } from 'react';
import ProductContext from '../../contexts/productContext';
import BuyPop from '../comp/BuyPop';
import Cartitems from './Cartitems';

const Cart = ({ alerts }) => {

  const { getItems, items} = useContext( ProductContext );

  const totalAmount = items.map(trans => trans.amount).reduce((acc, item) => (acc += item), 0).toFixed(2);

  useEffect(() => {
   if(localStorage.getItem("token")){
     getItems()
   }
  }, []);

  const ref = useRef(null)

  const handleModal = () => {
    ref.current.click()
  }
  

  return (
    <>
    <div className='container' style={{ padding: 100 }}>
      <h2 className="text-center text-warning my-5"> Cart Lists </h2>

      <div className="row">
        { localStorage.getItem("token") ? items.map( item => {
          return(
            <Cartitems alert={ alerts } key={item._id} item={item}/>
          )
        } ) : <h2 className='text-center text-primary pt-3'>You have to login first to add items</h2>}
      </div>

     {localStorage.getItem("token") ? <div className='d-flex justify-content-center align-items-center flex-column text-center pt-5'>
        <h3 className='heading mx-3'> Your Balance </h3>
        <h1>&#x20B9; <span className="text-primary">{totalAmount}</span></h1>
        <button className='btn btn-primary mt-3' onClick={handleModal} style={{ fontSize: 25 }}>Buy All</button>
      </div> : <div className='d-flex justify-content-center align-items-center text-center pt-5'>
        <h3 className='heading mx-3'> Your Balance </h3>
        <h1>&#x20B9; <span className="text-primary">0.00</span></h1>
      </div> }
    </div>

    <BuyPop open={ ref } />
    </>
  );
};

export default Cart;
