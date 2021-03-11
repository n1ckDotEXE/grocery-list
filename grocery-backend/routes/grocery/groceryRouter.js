var express = require("express");
var router = express.Router();

// Middleware
var {
	createGrocery,
	getAllGrocery,
	deleteByIDV1,
	deleteByIDV2,
} = require("./controller/groceryController");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/get-all-grocery", getAllGrocery);
router.post("/create-grocery", createGrocery);
router.delete("/delete-by-id-v1", deleteByIDV1);
router.delete("/delete-by-id-v2/:id", deleteByIDV2);

module.exports = router;
