import React, { Component } from "react";
import axios from "axios";

export class Grocery extends Component {
	state = {
		groceryInput: "",
		groceryList: [],
	};

	componentDidMount = async () => {
		try {
			let allGrocery = await axios.get(
				"http://localhost:3001/grocery/get-all-grocery"
			);
			console.log(allGrocery);
		} catch (e) {
			console.log(e);
		}
	};

	handleGroceryInputOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
		console.log(event);
	};

	handleGrocerySubmit = async () => {
		try {
			let createdGrocery = await axios.post(
				"http://localhost:3001/grocery/create-grocery",
				{ grocery: this.state.groceryInput }
			);
			console.log(createdGrocery);
			//Spread previous array
			let newGroceryArrayList = [
				...this.state.groceryList,
				createdGrocery.data.data,
			];
			// let newGroceryList = [createdGrocery.data.newGrocery];
			// this.setState({
			// 	groceryList: newGroceryList,
			// });
			this.setState({
				groceryList: newGroceryArrayList,
			});
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		return (
			<div style={{ marginTop: 20, textAlign: "center" }}>
				<div style={{ marginTop: 20 }}>
					<input
						type="text"
						name="groceryInput" // {this.state.groceryInput}
						value={this.state.groceryInput}
						onChange={this.handleGroceryInputOnChange}
					/>
				</div>
				<br />
				<button
					style={{ marginBottom: 10 }}
					onClick={this.handleGrocerySubmit}
				>
					Submit
				</button>
				<br />
				{this.state.groceryList.map((item) => {
					return (
						<div key={item._id}>
							<span style={{ margin: "10px" }}>
								{item.grocery}
							</span>
							<button
								style={{ margin: "10px" }}
								className="btn btn-danger"
							>
								Delete
							</button>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Grocery;
