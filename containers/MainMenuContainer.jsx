import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { drawNewDiagramItem } from "../actions/DiagramActions";

import HintsBar from "../components/MainMenuElements/HintsBar.jsx";
import MenuList from "../components/MainMenuElements/MenuList.jsx";


class MainMenuContainer extends React.Component {

	constructor(params) {
		super(params);
		this.state = {
			
			className: "toolbar",			
			menu_list: {
				className: "menu_list"
			},
			menu_list_items: [
				{
					className: "menu_list_item non_selectable_text",
					text: "New Entity",
					itemType: "entity",
					onClickHandler: null
				},
				{
					className: "menu_list_item non_selectable_text",
					text: "New Arrow",
					itemType: "arrow",
					onClickHandler: null
				},
				{
					className: "menu_list_item non_selectable_text",
					text: "Option 3",
					onClickHandler: null
				},
				{
					className: "menu_list_item non_selectable_text",
					text: "Option 4",
					onClickHandler: null
				},
				{
					className: "menu_list_item non_selectable_text",
					text: "Save Diagram",
					onClickHandler: null
				},
				{
					className: "menu_list_item non_selectable_text",
					text: "Show Hints",
					onClickHandler: null
				},
			],
			hintsBar: {
				className: "hints_bar",
				visibility: false,
				hints_list: {
					className: null
				},
				hints_list_items: [
					{
						className: null,
						text: "Click &amp; Drag an \"Entity\" in order to move it across the screen."
					},
					{
						className: null,
						text: "Click &amp; Double Click on an Entitys' body in order to edit it."
					},
					{
						className: null,
						text: "Click &amp; Ctrl &amp; Double Click on an arrow and move the cursor in order to resize it."
					},
					{
						className: null,
						text: "Future hint."
					}
				]
			}
		};
	}

	componentWillReceiveProps(nextProps) {

		var updatedState = Object.assign({}, this.state);

		updatedState.menu_list_items[0].onClickHandler = nextProps.drawNewDiagramItem;
		updatedState.menu_list_items[1].onClickHandler = nextProps.drawNewDiagramItem;
		this.setState(updatedState);
	}

	componentWillMount() {

		var updatedState = Object.assign({}, this.state);

		updatedState.menu_list_items[0].onClickHandler = this.props.drawNewDiagramItem;
		updatedState.menu_list_items[1].onClickHandler = this.props.drawNewDiagramItem;
		this.setState(updatedState);
	}

	render() {

		return (
			
			<div className = { this.state.className }>
				<MenuList className = { this.state.menu_list.className } menu_list_items = { this.state.menu_list_items } />
				<HintsBar className = { this.state.hintsBar.className } visibility = { this.state.hintsBar.visibility } hints_list = { this.state.hints_list } hints_list_items = { this.state.hints_list_items }/>
			</div>
		);
	}
};

const mapStateToProps = (state) => {

	// console.log("mapStateToProps fired!");
	return {};
};

const mapDispatchToProps = (dispatch) => {

	return bindActionCreators({
		drawNewDiagramItem,
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MainMenuContainer);