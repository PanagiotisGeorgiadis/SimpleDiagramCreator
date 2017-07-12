/* Simple Diagram Creator in order to test the reconsiler performance and implement improvements */
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/";

import initialState from "./SimpleDiagramState";

import MainMenuContainer from "./containers/MainMenuContainer.jsx";
import DiagramContainer from "./containers/DiagramContainer.jsx";

export default class SimpleDiagram extends React.Component {

	constructor() {

		super();
		this.state = {};
	}

	render() {
		return (
			<Router>
				<div>
					<MainMenuContainer />
					<DiagramContainer />
				</div>
			</Router>
		);
	}
}

var reactRoot = document.getElementById("react-root");

const store = createStore(rootReducer, initialState);
ReactDOM.render(<Provider store = { store } >
					<SimpleDiagram />
				</Provider>,
				reactRoot);