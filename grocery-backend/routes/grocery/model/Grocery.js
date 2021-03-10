const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
	grocery: {
		type: String,
	},
});

// Gets grocery and assigns to grocery schema
module.exports = mongoose.model("grocery", grocerySchema);
