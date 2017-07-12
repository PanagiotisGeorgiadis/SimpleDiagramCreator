import React from "react";

export default class EntityHeader extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			headerValue: "",
			onChangeHandler: null,
			keyValue: undefined
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...this.state,
			...nextProps
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
			<div className = "entity_header">
				<input type = "text" placeholder = "Enter title" value = { this.state.headerValue } onChange = { (event) => this.state.onChangeHandler(event.target.value, this.state.keyValue) } />
			</div>
		);
	}
}
