import React from "react";

import MenuListItem from "./MenuListItem.jsx";

export default class MenuList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			className: null,
			menu_list_items: []
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

		let list_items;
		if(this.state.menu_list_items.length) {

			list_items = this.state.menu_list_items.map((menu_list_item, iterator) => {
				return (
					<MenuListItem key = { iterator } className = { menu_list_item.className } text = { menu_list_item.text } itemType = { menu_list_item.itemType } onClickHandler = { menu_list_item.onClickHandler } />
				);
			});
		}

		return (
			<ul className = { this.state.className }>
				{ list_items }
			</ul>
		);
	}
}