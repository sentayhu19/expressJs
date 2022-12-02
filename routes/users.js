const express = require("express");

const router =  express.Router();

router.use("/", ( req, res) => {
    res.send("This is Users");
});

// router.use("/get-users-list",( req, res) => {
//     res.send("This is users list ");
// });




router.use('/get-users-list', (req, res)=>{
    res.send("Get Req for prudcts");
})
router.post("/create-new-user",(req,res)=>{
    res.send("CREATING NEW USERS...")
})

module.exports = router;