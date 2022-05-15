const router = require("express").Router();

router.get("/userText", (req, res) => {
    res.send("Got the get request");
});

router.post("/userPost", (req, res) => {
    const username = req.body.userName;
    res.send("Got the post request of " + username);
});

module.exports = router;  