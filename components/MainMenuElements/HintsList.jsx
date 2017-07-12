import React from "react";

import HintsListItem from "./HintsListItem.jsx";

export default class HintsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: null,
			hints_list_items: []
		};
	}

	componentWillMount() {

		var updatedComponentState = Object.assign({}, this.state);

		if(this.props.className)
			updatedComponentState.className = this.props.className;

		if(this.props.hints_list_items.length)
			updatedComponentState.hints_list_items = this.props.hints_list_items;

		this.setState(updatedComponentState);
	}

	render() {

		let hints_list_items;

		if(this.state.hints_list_items.length) {

			hints_list_items = this.state.hints_list_items.map((hints_list_item, iterator) => {

				return (
					<HintsListItem key = { iterator } className = { hints_list_item.className } text = { hints_list_item.text } />
				);
			});
		}

		return (
			<ul className="hints_list">
				{ hints_list_items }
			</ul>
		);
	}

}