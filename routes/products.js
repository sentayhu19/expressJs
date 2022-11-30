const express = require("express")
const router = express.Router()

router.use("/",(req,res) => {
res.send("This is Product response.......")
});

router.use('/get-product-details', (req, res)=>{
    res.send("Get Req for prudcts");
})

module.exports = router;