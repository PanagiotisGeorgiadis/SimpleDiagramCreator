import React from "react";

export default class EntityBody extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			containerClassName: "entity_body",
			overlayClassName: "entity_body_overlay",
			textareaClassName: "entity_body_textarea",
			bodyValue: "",
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
			<div className = { this.state.containerClassName }>
				<div className = { this.state.overlayClassName }></div>
				<textarea className = { this.state.textareaClassName } value = { this.state.bodyValue } onChange = { (event) => this.state.onChangeHandler(event.target.value, this.state.keyValue) }></textarea>
			</div>
		);
	}
}