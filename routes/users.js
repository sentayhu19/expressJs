const express = require("express");

const router =  express.Router();

router.get("/", ( req, res) => {
    res.send("This is Users");
});

// router.use("/get-users-list",( req, res) => {
//     res.send("This is users list ");
// });

router.get("/new", (req,res) => {
res.send("NEw users form")
})

router.route("/:id")
.get((req,res) => {
    res.send(`Get User with Id ${req.params.id}`)
})
.put((req,res) => {
    res.send(`Delete User with ID ${req.params.id}`)
})

// router.get("/:id", (req,res)=> {
//     res.send(`USER with an id ${req.params.id}`)
// })

module.exports = router;