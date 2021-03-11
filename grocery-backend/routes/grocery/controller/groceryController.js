const Grocery = require("../model/Grocery.js");

module.exports = {
	createGrocery: async (req, res) => {
		// res.send("Good to go");
		try {
			let newGrocery = new Grocery({
				grocery: req.body.grocery,
			});

			let savedGroceryItem = await newGrocery.save();

			res.json({
				data: savedGroceryItem,
			});
		} catch (e) {
			res.status(500).json({ error: e.message });
		}
	},
	getAllGrocery: async (req, res) => {
		try {
			let allGrocery = await Grocery.find({});

			res.json({
				allGrocery: allGrocery,
			});
		} catch (e) {
			res.status(500).json({ error: e.message });
		}
	},
	deleteByIDV1: async (req, res) => {
		try {
			let deletedGrocery = await Grocery.findByIdAndDelete({
				_id: req.body.groceryID,
			});
			res.json({ data: deletedGrocery });
		} catch (e) {
			res.status(500).json({ error: e.message });
		}
	},
	deleteByIDV2: async (req, res) => {
		try {
			let deletedGrocery = await Grocery.findByIdAndDelete({
				_id: req.params.id,
			});

			res.json({
				data: deletedGrocery,
			});
		} catch (e) {
			res.status(500).json({ error: e.message });
		}
	},
};
