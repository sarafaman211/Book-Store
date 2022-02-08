const express = require("express");
const router = express.Router();
const Items = require('../model/Items')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchUser');

// Router 1 get all the data stored in data base 
router.get("/fetchData", fetchUser, async (req, res)=>{
    try {
        let items = await Items.find({user: req.user.id})

        res.json({ items })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 2 add the data in data base
router.post("/addData", fetchUser, [
    body("title", "You Must Enter Something").exists(),
    body("year").isNumeric(),
    body("amount").isNumeric(),
    body("author").exists(),
], async (req, res)=>{

    const Errors = validationResult(req);
    if(!Errors.isEmpty()){
        return res.status(400).json({ Errors: Errors.array() })
    }

    try {

        const { author, title, year , amount } = req.body;

        let items = await new Items({
            author, title, year , amount, user: req.user.id
        })

        const saveData = await items.save()

        res.json( saveData )
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// ROuter 3 update data in your data base
router.put('/updateData/:id', fetchUser, async (req, res) => {
    try {

        const {author, title, year, amount} = req.body;

        const newItems = {}
        if(title){newItems.title = title}
        if(amount){newItems.amount = amount}
        if(author){newItems.author = author}
        if(year){newItems.year = year}
        
        let items = await Items.findById(req.params.id);
        if(!items){
            return res.status(404).json({ error: "Not Found" })
        }

        if(items.user.toString() !== req.user.id){
            return res.status(401).json({ error: "Not Allowed" })
        }

        items = await Items.findByIdAndUpdate(req.params.id, { $set: newItems }, { new: true })

        res.json({ items })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

// Router 4 delete the data from data base
router.delete('/deleteData/:id', fetchUser, async (req, res)=>{
    try {
        
        let items = await Items.findById(req.params.id);
        if(!items){
            return res.status(404).json({ error: "Data Deleted SuccessFully" })
        }

        items = await Items.findByIdAndDelete(req.params.id,)

        res.json({ items })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" })
    }
})

module.exports = router;