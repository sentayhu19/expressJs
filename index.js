const express = require("express")
const productsRouter = require("./routes/products")
const usersRouter = require("./routes/users")
const orderRouter = require("./routes/order")
const itemRouter =  require("./routes/items")
const app = express()

app.set("view engine", "ejs") 
app.use(logger)
app.get("/", (req,res)=>{
    res.render("index", {text123: "Passed!"})
})

app.use("/users", usersRouter)
app.use("/products",productsRouter)
app.use("/order",orderRouter);
app.use("/items", itemRouter)

app.listen(3000)

function logger (req, res, next){
    console.log(req.originalUrl)
    next()
}
