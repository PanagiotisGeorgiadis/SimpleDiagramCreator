import React from "react";

export default class ArrowBody extends React.Component {

	constructor(props) {

		super(props);
		this.state = {

			keyValue: undefined,
			onDragStartHandler: null
		};
	}

	componentWillReceiveProps(nextProps) {

		this.setState({
			...this.state,
			...this.props
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

		return (
			<div className = "arrow_container" draggable = "true" onDragStart = { this.dragStartHandler.bind(this) }>
				<div className = "arrow_image"></div>
			</div>
		);
	}
}


/*
	<div class="resizable_container arrow_resizable_container" onclick="afterResizeHandler(event);" ondblclick="beforeResizeHandler(event);" onmousemove="resizeHandler(event);">
		<div class="arrow_container" draggable="true" ondragstart="onDragStartHandler(event);">
			<!-- <img class="arrow_image" src="./normal_arrow.png" /> -->
			<div class="arrow_image"></div>
		</div>
	</div>
*/