const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
res.send("This is Product response.......")
});

router.get('/get-product-details', (req, res)=>{
    res.send("Get Req for prudcts");
})



module.exports = router;