const express = require("express")
// const products = require("./routes/products")
// const users = require("./routes/users")
const app = express()

app.set("view engine", "ejs")
app.get("/", (req,res)=>{
    res.render("index")
})
app.listen(3000)