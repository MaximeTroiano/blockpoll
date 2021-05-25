import React, { Component } from "react";
// import Web3 from 'web3';
// import Identicon from 'identicon.js';
import "./App.css";
import Main from "./Main";
// import BlockPoll from '../abis/BlockPoll.json'
import Navbar from "./Navbar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "",
		};
	}

	render() {
		return (
			<div>
				<Navbar account={this.state.account} />
				{this.state.loading ? (
					<div id="loader" className="text-center mt-5">
						<p>Loading...</p>
					</div>
				) : (
					<Main
					// Code...
					/>
				)}
				}
			</div>
		);
	}
}

export default App;
