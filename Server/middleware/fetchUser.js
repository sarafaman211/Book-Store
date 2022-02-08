const jwt = require("jsonwebtoken");
const token_key = process.env.TOKEN;

const fetchUser = (req, res , next) =>{

    const token = req.header("auth-token");

    if(!token){
        return res.status(404).json({ error: "Token dosent found" })
    }

    const authToken = jwt.verify(token, token_key)
    req.user = authToken.user

    next()
}

module.exports = fetchUser;