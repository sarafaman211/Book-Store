const mongo = require("./db");
const express = require("express");
const dotEnv = require("dotenv");
const colors = require("colors"); 
const cors = require("cors");

dotEnv.config({ path: "./Config/config.env" }); 

mongo();
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors());

app.use("/api/user", require("./routes/user"))
app.use("/api/product", require("./routes/products"))
app.use("/api/item", require("./routes/items"))

app.listen(PORT, console.log(`Book-Store listening at port ${PORT} it is in ${process.env.MODE}`.cyan.bold))