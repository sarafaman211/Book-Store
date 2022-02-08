const express = require("express");
const router = express.Router();
const Products = require('../model/Products');
const fetchUser = require("../middleware/fetchUser")

// Router1 get all products
router.get("/products", async (req, res) => {
    try {

        const product = await Products.find({})
        console.log(product)
        res.json({ product })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error Occured" })
    }
})

// Router 2 get a particular router you want 
router.get("/getProducts/:id", fetchUser, async ( req, res ) => {
    try {
        const product = await Products.findOne({ user: req.params._id })
        if(!product){
            return res.status(404).json({ error: "Not Found" })
        }
        console.log(product)
        res.json({ product })
    } catch (err) {
        console.error({ error: err.message })
        res.status(500),json({ error:  "Internal Server Error" })
    }
})

module.exports = router;