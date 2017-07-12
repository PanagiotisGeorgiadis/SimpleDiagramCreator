import React from "react";

import HintsList from "./HintsList.jsx";

export default class HintsBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: null,
			visibility: false,
			hints_list: {
				className: null
			},
			hints_list_items: []
		};
	}

	componentWillMount() {

		var updatedComponentState = Object.assign({}, this.state);

		if(this.props.className)
			updatedComponentState.className = this.props.className;

		if(this.props.visibility)
			updatedComponentState.visibility = this.props.visibility;

		if(this.props.hints_list)
			updatedComponentState.hints_list = this.props.hints_list;

		if(this.props.hints_list_items)
			updatedComponentState.hints_list_items = this.props.hints_list_items;



		this.setState(updatedComponentState);
	}

	render() {

		return (
			<div className = { this.state.className } data-visibility = { this.state.visibility }>
				<HintsList className = { this.state.hints_list.className } hints_list_items = { this.state.hints_list_items } />
			</div>
		);
	}
}