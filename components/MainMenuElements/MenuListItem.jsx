import React from "react";

export default class MenuListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: null,
			text: null,
			itemType: null,
			onClickHandler: null
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
			<li className = { this.state.className } onClick = { (event) => this.state.onClickHandler(this.state.itemType) } >
				{ this.state.text }
			</li>
		);
	}
}