const express = require("express")
const products = require("./routes/products")
const app = express()

app.use('/products',products);
app.listen(3000)