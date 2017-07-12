import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Arrow from "../components/Arrow.jsx";
import Entity from "../components/Entity.jsx";

import { entityBodyValueHandler, entityHeaderValueHandler, drawNewEntity } from "../actions/EntityActions";
import { setMovingElementData, updateMovingElementPosition } from "../actions/DiagramActions";

import { ArrowReducer, EntityReducer, DiagramReducer } from "../reducers/";

class DiagramContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			entities: [],
			arrows: [],
			entityHeaderValueHandler: null,
			entityBodyValueHandler: null,
			onDragStartHandler: null,
			items: [],
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

	//onDragOverHandler(event) {

		//var cursorX = event.pageX;	// Horizontal = left = width
		//var cursorY = event.pageY;	// Vertical   = top  = height


		// setCssPropertyValue(targetEntity, "left", cursorX - cursorOnTargetEntityX + "px");
		// setCssPropertyValue(targetEntity, "top", cursorY - cursorOnTargetEntityY + "px");
	//}

	render() {

		// console.log("DiagramContainer render function called!");
		// let entities;
		// if(this.state.entities.length) {

		// 	entities = this.state.entities.map((entity, iterator) => {
		// 		return (
		// 			<Entity key = { iterator } entityBodyValueHandler = { this.state.entityBodyValueHandler } headerValue = { entity.headerValue } entityHeaderValueHandler = { this.state.entityHeaderValueHandler } bodyValue = { entity.bodyValue } keyValue = { iterator } onDragStartHandler = { this.state.onDragStartHandler } />
		// 		);
		// 	});
		// }

		// let arrows;
		// if(this.state.arrows.length) {

		// 	arrows = this.state.arrows.map((arrow, iterator) => {
		// 		return (
		// 			<Arrow key = { iterator } onDragStartHandler = { this.state.onDragStartHandler } />
		// 		);
		// 	});
		// }

		// return (
		// 	<div className = "diagram_container" onDragOver = { (event) => this.state.onDragOverHandler(event) } >
		// 		{ entities }
		// 		{ arrows }
		// 	</div>
		// );

		let items;
		if(this.state.items.length) {

			items = this.state.items.map( (item, iterator) => {

				if(item.type === "entity")
					return (
						<Entity key = { iterator } entityBodyValueHandler = { this.state.entityBodyValueHandler } headerValue = { item.headerValue } entityHeaderValueHandler = { this.state.entityHeaderValueHandler } bodyValue = { item.bodyValue } keyValue = { iterator } onDragStartHandler = { this.state.onDragStartHandler } left = { item.left } top = { item.top } />
					);
				else
					return (
						<Arrow key = { iterator } keyValue = { iterator } onDragStartHandler = { this.state.onDragStartHandler } left = { item.left } top = { item.top } />
					);
			});
		}
		
		return (
			<div className = "diagram_container" onDragOver = { (event) => this.state.onDragOverHandler(event) } >
				{ items }
			</div>
		);
	}
}


// const mapStateToProps = (state) => ({

// 	formId: state.categoryForm.formId,
// 	formMethod: state.categoryForm.formMethod,
// 	formRows: state.categoryForm.formRows,
// 	formShouldUpdate: state.categoryForm.formShouldUpdate
// });

const mapStateToProps = (state) => {

	// console.log("Diagram mapStateToProps fired!");
	return {
		entities: state.EntityReducer.entities,
		arrows: state.ArrowReducer.arrows,
		items: state.DiagramReducer.items,
		targetKey: state.DiagramReducer.targetKey,
		targetElement: state.DiagramReducer.targetElement,
		cursorOnTargetX: state.DiagramReducer.cursorOnTargetX,
		cursorOnTargetY: state.DiagramReducer.cursorOnTargetY,
		cursorX: state.DiagramReducer.cursorX,
		cursorY: state.DiagramReducer.cursorY,
		timestamp: Date.now()
	};
};

// const mapDispatchToProps = (dispatch) => 
// 	bindActionCreators({
// 		displayNameHandler: displayNameInputHandler,
// 		nameHandler: nameInputHandler,
// 		tagsHandler: tagsInputHandler,
// 		saveCategoryHandler: saveCategoryHandler
// 	}, dispatch);

const mapDispatchToProps = (dispatch) => {

	// console.log("mapDispatchToProps fired!");
	return bindActionCreators({
		entityBodyValueHandler,
		entityHeaderValueHandler,
		onDragStartHandler: setMovingElementData,
		onDragOverHandler: updateMovingElementPosition
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DiagramContainer);