const express = require("express")
const productsRouter = require("./routes/products")
const usersRouter = require("./routes/users")
const app = express()

app.set("view engine", "ejs")
app.get("/", (req,res)=>{
    res.render("index", {text123: "Passed!"})
})

app.use("/users", usersRouter)
app.use("/products",productsRouter)
app.listen(3000)