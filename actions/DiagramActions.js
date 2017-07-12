
export const SET_MOVING_ELEMENT_DATA = "ELEMENT/MOVING/SET";
export const CLEAR_MOVING_ELEMENT_DATA = "ELEMENT/MOVING/CLEAR";
export const UPDATE_MOVING_ELEMENT_POSITION = "ELEMENT/MOVING/POSITION";

export const DRAW_NEW_ITEM	= "ITEM/ADD";
export const REMOVE_ITEM = "ITEM/REMOVE";




export const setMovingElementData = (event, key) => ({
	type: SET_MOVING_ELEMENT_DATA,
	payload: {
		key,
		targetElement: event.target,
		cursorOnTargetX: event.nativeEvent.offsetX,
		cursorOnTargetY: event.nativeEvent.offsetY
	}
});

export const updateMovingElementPosition = (event) => ({
	type: UPDATE_MOVING_ELEMENT_POSITION,
	payload: {
		cursorX: event.nativeEvent.pageX,
		cursorY: event.nativeEvent.pageY,
	}
});

export const clearMovingElement = (event) => ({
	type: CLEAR_MOVING_ELEMENT_DATA,
	payload: {}
});

export const drawNewDiagramItem = (type) => ({
	type: DRAW_NEW_ITEM,
	payload: {
		type
	}
});

export const removeDiagramItem = (key, type) => ({
	type: REMOVE_ITEM,
	payload: {
		key,
		type
	}
});