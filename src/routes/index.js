const express = require("express");
const router = express.Router();
let viewCount = 0;

router.get("/", (req, res, next) => {

    if(!req.session.viewCount){
        req.session.viewCount = 1;
    } else {
        req.session.viewCount += 1;
    }
  res.render("index", { viewCount: req.session.viewCount });
});

module.exports = router;
