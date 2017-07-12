/*
export const RESIZE_ENTITY_CONTAINER = "ENTITY/RESIZE";
export const MOVE_ENTITY_CONTAINER = "ENTITY/MOVE";
export const DRAW_NEW_ENTITY = "ENTITY/NEW";
export const REMOVE_ENTITY = "ENTITY/REMOVE";

var selectedEntity = null;

export default {

	drawNewDummyContainer: () => {

		var dummy_container = document.createElement("div");
		dummy_container.className = "dummy_container";

		return dummy_container;
	},

	drawNewEntityBody: () => {
	
		var entity_body = document.createElement("div");
		var entity_body_overlay = document.createElement("div");
		var entity_textarea = document.createElement("textarea");

		entity_body.className = "entity_body";
		entity_body.ondblclick = function() {
			enableBodyEditing(event);
		};

		entity_body_overlay.className = "entity_body_overlay";
		entity_textarea.className = "entity_body_textarea";
		entity_textarea.setAttribute("rows", "5");
		entity_body.appendChild(entity_body_overlay);
		entity_body.appendChild(entity_textarea);

		return entity_body;
	},

	drawNewEntityHeader: () => {
	
		var entity_header = document.createElement("div");
		var entity_input = document.createElement("input");

		entity_header.className = "entity_header";
		entity_header.ondblclick = function() {
			enableTitleEditing(event);
		};
		entity_input.setAttribute("type", "text");
		entity_header.appendChild(entity_input);

		return entity_header;
	},
	
	drawNewEntityContainer: () => {

		var entity_container = document.createElement("div");
		entity_container.className = "entity_container";
		entity_container.setAttribute("draggable", "true");

		entity_container.ondragstart = function(event) {

			onDragStartHandler(event);
		};

		return entity_container;
	},
	
	drawNewEntity: (event) => {

		var dummy_container = drawNewDummyContainer();
		var entity_container = drawNewEntityContainer();
		var entity_header = drawNewEntityHeader();
		var entity_body = drawNewEntityBody();

		entity_container.appendChild(entity_header);
		entity_container.appendChild(entity_body);
		dummy_container.appendChild(entity_container);

		var body = document.getElementsByTagName("body")[0];
		body.appendChild(dummy_container);
	},
	
	enableTitleEditing: (event) => {

		// console.log(event);
		// console.log(event.target);
		console.log("enableTitleEditing called!");
	},
	
	disableBodyEditing: (event) => {
		
		setCssPropertyValue(event.target.parentElement.getElementsByClassName("entity_body_overlay")[0], "zIndex", 2);
	},
	
	enableBodyEditing: (event) => {

		if(!event.ctrlKey) {

			if(event.target.className === "entity_body_overlay") {

				setCssPropertyValue(event.target, "zIndex", 0);
				event.target.parentElement.getElementsByClassName("entity_body_textarea")[0].focus();
			} else {
				
				// setCssPropertyValue(event.target.parentElement.getElementsByClassName("entity_body_overlay")[0], "zIndex", 2);
				document.activeElement.blur();
			}
		}
	}

}; // End of export default
*/

export const DRAW_NEW_ENTITY		= "ENTITY/NEW";
export const REMOVE_ENTITY			= "ENTITY/REMOVE";
export const ENTITY_BODY_UPDATE		= "ENTITY/BODY/UPDATE";
export const ENTITY_HEADER_UPDATE	= "ENTITY/HEADER/UPDATE";
export const ENTITY_KEY_UPDATE		= "ENTITY/KEY/UPDATE";

export const drawNewEntity = () => ({

	type: DRAW_NEW_ENTITY,
	payload: {
		message: "drawNewEntity Action fired!"
	}
});

export const removeEntity = (key) => ({
	type: REMOVE_ENTITY,
	payload: {
		key
	}
});

export const entityBodyValueHandler = (bodyValue, key = 0) => ({
	type: ENTITY_BODY_UPDATE,
	payload: {
		bodyValue,
		key
	}
});

export const entityHeaderValueHandler = (headerValue, key = 0) => ({
	type: ENTITY_HEADER_UPDATE,
	payload: {
		headerValue,
		key
	}
});

export const updateEntityKeyValue = (key = 0) => ({
	type: ENTITY_KEY_UPDATE,
	payload: {
		key
	}
});





