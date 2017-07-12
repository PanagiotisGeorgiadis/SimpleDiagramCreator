import React from "react";

export default class HintsListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: null,
			text: null,
		};
	}

	componentWillMount() {

		var updatedComponentState = Object.assign({}, this.state);

		if(this.props.className)
			updatedComponentState.className = this.props.className;

		if(this.props.text)
			updatedComponentState.text = this.props.text;

		this.setState(updatedComponentState);
	}

	render() {

		return (
			<li className = {this.state.className} >
				{this.state.text}
			</li>
		);
	}

}