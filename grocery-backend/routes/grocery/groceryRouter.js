var express = require("express");
var router = express.Router();

// Middleware
var {
	createGrocery,
	getAllGrocery,
} = require("./controller/groceryController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/get-all-grocery", getAllGrocery);
router.post("/create-grocery", createGrocery);

module.exports = router;
