import React from "react";

import EntityBody from "./EntityElements/EntityBody.jsx";
import EntityHeader from "./EntityElements/EntityHeader.jsx";

export default class Entity extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			width: undefined,
			height: undefined,
			top: undefined,
			left: undefined,

			headerValue: "",
			bodyValue: "",
			keyValue: undefined,

			entityHeaderValueHandler: null,
			entityBodyValueHandler: null,
			onDragStartHandler: null,
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

	dragStartHandler(event) {

		// console.log(event.target);
		// These first 3 lines are used to hide the "shadow element" that appears when an element is draggable.
		var previewElement = document.createElement("div");
		previewElement.style.display = "none";
		event.dataTransfer.setDragImage(previewElement, 0, 0);

		if(this.state.onDragStartHandler)
			this.state.onDragStartHandler(event, this.state.keyValue);

		// var activeElementParent = document.activeElement.parentElement;
		// setCssPropertyValue(activeElementParent.getElementsByClassName("entity_body_overlay")[0], "zIndex", 2);
		// document.activeElement.blur();
	}

	render() {

		// console.log(this.state);

		return (
			<div className = "resizable_container entity_resizable_container" style = { {top: this.state.top, left: this.state.left} } >
				<div className = "entity_container" draggable = "true" onDragStart = { this.dragStartHandler.bind(this) } onDragEnd = { () => console.log("ONDRAGEND FIRED") }>

					<EntityHeader onChangeHandler = { this.state.entityHeaderValueHandler } headerValue = { this.state.headerValue } keyValue = { this.state.keyValue } />
					<EntityBody onChangeHandler = { this.state.entityBodyValueHandler } bodyValue = { this.state.bodyValue } keyValue = { this.state.keyValue } />

				</div>
			</div>
		);
	}
};

/*
	<div class="resizable_container entity_resizable_container" onclick="afterResizeHandler(event);" ondblclick="beforeResizeHandler(event);" onmousemove="resizeHandler(event);">
		<div class="entity_container" draggable="true" ondragstart="onDragStartHandler(event);">
			<div class="entity_header" ondblclick="enableTitleEditing(event);">
				<input type="text" placeholder="Enter title" />
			</div>
			<div class="entity_body" ondblclick="enableBodyEditing(event);">
				<div class="entity_body_overlay"></div>
				<textarea class="entity_body_textarea" onblur="disableBodyEditing(event);"></textarea>
			</div>
		</div>
	</div>
*/
