import React, { useContext } from 'react';
import ProductContext from '../../contexts/productContext';


const Cartitems = ({ item, alert }) => {
  const { deleteItem } = useContext(ProductContext)

  const { author, title, amount, year, _id } = item;

  const handleClick = () => {
    deleteItem(_id)
    alert("Product Removed Successfully", "success")
  }

  return (
   
      <div className='col-md-3 g-3'>
        <div className="card">
          <div className="card-body" style={{ padding: 25, fontSize: 13 }}>
            <strong className="card-title text-primary pb-2">Product: <span className='text-dark'>{title}</span></strong>
            <hr />
            <h5 className="card-text pb-2">Author: {author}</h5>
            <hr />
            <div className='d-flex justify-content-between pb-2 pt-3'>
              <div className='year text-secondary'>{Math.abs(year)}</div>
              <div className='amount text-success'>&#x20B9;{amount}</div>
            </div>
            <div className='d-flex justify-content-between align-items-center pb-3'>
              <i style={{ cursor: "pointer" }} onClick={handleClick} className="fas fa-trash-alt text-danger"></i>
            </div>
          </div>
        </div>
      </div>


  );
};

export default Cartitems;

