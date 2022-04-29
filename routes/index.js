var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", ensureAutheticated, function (req, res, next) {
  res.render("index", { title: "Members" });
});

function ensureAutheticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/users/login");
}

module.exports = router;
