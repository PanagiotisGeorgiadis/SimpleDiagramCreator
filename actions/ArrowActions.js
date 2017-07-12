/*
export const RESIZE_ARROW_CONTAINER = "ARROW/RESIZE";
export const MOVE_ARROW_CONTAINER = "ARROW/MOVE";
export const DRAW_NEW_ARROW = "ARROW/NEW";
export const REMOVE_ARROW = "ARROW/REMOVE";

export default {

	drawNewResizableContainer: () => {

		var resizable_container = document.createElement("div");

		resizable_container.className = "resizable_container";

		resizable_container.onclick = function(event) {
			afterResizeHandler(event);
		};

		resizable_container.ondblclick = function(event) {
			beforeResizeHandler(event);
		};

		resizable_container.onmousemove = function(event) {
			resizeHandler(event);
		};

		return resizable_container;
	},
	drawNewArrowContainer: () => {

		var arrow_container = document.createElement("div");
		arrow_container.className = "arrow_container";
		arrow_container.setAttribute("draggable", "true");

		arrow_container.ondragstart = function(event) {
			onDragStartHandler(event);
		};

		arrow_container.onclick = function(event) {
			toggleResizable(event);
		};

		return arrow_container;
	},
	drawNewArrowImage: () => {

		var arrow_image = document.createElement("div");
		arrow_image.className = "arrow_image";

		return arrow_image;
	},
	drawNewArrow: () => {

		var resizable_container = drawNewResizableContainer();
		var arrow_container = drawNewArrowContainer();
		var arrow_image = drawNewArrowImage();

		arrow_container.appendChild(arrow_image);
		resizable_container.appendChild(arrow_container);

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(resizable_container);
	}

}; // End of export default
*/

export const RANDOM_HANDLER = "RANDOM/HANDLER";

export default {

	randomHandler: (event) => ({
		type: RANDOM_HANDLER,
		payload: event
	}),
}