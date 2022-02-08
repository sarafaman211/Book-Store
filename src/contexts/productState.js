import React, { useState } from "react";
import ProductContext from "./productContext";

const ProductState = ({ children }) => {

    const [product, setProduct] = useState([]);
    const [items, setItems] = useState([]);
   
    // http request for get. adding and deleting the items
    const getItems = async () => {
        const response = await fetch("http://localhost:5000/api/item/fetchData", {
            method: "GET",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })

        const { items } = await response.json();
        // console.log(items)
        setItems(items)
    }

    const addProducts = async ( author, title, amount, year ) => {
        const response = await fetch(`http://localhost:5000/api/item/addData`, {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify( author , title, amount, year )
        })

        const { product } = await response.json();
        setProduct(product)
    }

    const deleteItem = async (id) => {
        const response = await fetch(`http://localhost:5000/api/item/deleteData/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            }
        })

        const { product } = await response.json();
        const data = product.filter(item => { return (item._id !== id) })
        // console.log(data)
        setItems(data)
    }

    // http request for getting all produts
    const getProducts = async () => {
        const response = await fetch(`http://localhost:5000/api/product/products`, {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })

        const { product } = await response.json();
        setProduct(product);
    }
    

    return (
        <ProductContext.Provider value={{ product, getProducts, getItems, items, deleteItem, addProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductState;