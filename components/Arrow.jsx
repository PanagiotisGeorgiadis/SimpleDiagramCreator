import React from "react";

import ArrowBody from "./ArrowElements/ArrowBody.jsx";

export default class Arrow extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			width: undefined,
			height: undefined,
			top: undefined,
			left: undefined,

			keyValue: undefined,
			onDragStartHandler: null,
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...this.state,
			...this.props
		});
	}

	componentWillMount() {

		this.setState({
			...this.state,
			...this.props
		});
	}

	render() {

		return (
			<div className = "resizable_container arrow_resizable_container" style = { {top: this.state.top, left: this.state.left} } >
 				<ArrowBody onDragStartHandler = { this.state.onDragStartHandler } keyValue = { this.state.keyValue } />
			</div>
		);
	}
};
