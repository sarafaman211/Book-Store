const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
const fetchUser = require('../middleware/fetchUser');

const token = process.env.TOKEN ;

// Router 1 createUser

router.post('/createUser', [
    body('name', "Write your name first").isLength({ min: 3 }),
    body("email", "Write your credentials").isEmail(),
    body("password", "fill your credentials").isLength({ min: 5 })
], async(req, res) => {
    const Errors = validationResult(req);
    if(!Errors.isEmpty()){
        return res.status(400).json({ Errors: Errors.array() })
    }

    try {
        
        let success = false;

        let user = await User.findOne({ email: req.body.email });

        if(user){
            return res.status(400).json({ error: "This Email is already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })

        const data ={
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, token)

        success = true;

        res.json({success, authToken })

    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" });
    }
})

// router 2 authenticate when trying to login it will authenticate

router.post('/auth', [
    body("email").isEmail(),
    body("password").exists()
], async(req, res)=>{

    const Errors = validationResult(req);
    if(!Errors.isEmpty()){
        return res.status(400).json({ Errors: Errors.array() })
    }

    try {
        const { email, password } = req.body;

        let success = false;

        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ error: "This Email is dosen't exists" })
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(400),json({ error: "Fill the correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, token)

        success = true;

        res.json({success, authToken })
        
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" });
    }

})

// Router 3 get your user detail
router.get("/getUser",fetchUser, async(req, res)=>{
    try {
        const userID = req.user.id
        const user = await User.findById(userID).select("-password")

        res.json({ user})
    } catch (err) {
        console.error({ error: err.message })
        res.status(500).json({ error: "Internal Error" });
    }
})

module.exports = router;