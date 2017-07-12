import { defaultEntity, defaultArrow } from "../SimpleDiagramState";
import { SET_MOVING_ELEMENT_DATA, CLEAR_MOVING_ELEMENT_DATA, UPDATE_MOVING_ELEMENT_POSITION, DRAW_NEW_ITEM, REMOVE_ITEM } from "../actions/DiagramActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case SET_MOVING_ELEMENT_DATA:

			updatedState.targetKey = action.payload.key;
			updatedState.targetElement = action.payload.targetElement;
			updatedState.cursorOnTargetX = action.payload.cursorOnTargetX;
			updatedState.cursorOnTargetY = action.payload.cursorOnTargetY;
			break;

		case UPDATE_MOVING_ELEMENT_POSITION:

			updatedState.cursorX = action.payload.cursorX;
			updatedState.cursorY = action.payload.cursorY;

			updatedState.items[updatedState.targetKey].left = updatedState.cursorX - updatedState.cursorOnTargetX + "px";
			updatedState.items[updatedState.targetKey].top = updatedState.cursorY - updatedState.cursorOnTargetY + "px";
			break;
			
		case CLEAR_MOVING_ELEMENT_DATA:

			updatedState.targetKey = null;
			updatedState.targetElement = null;
			updatedState.cursorOnTargetX = 0;
			updatedState.cursorOnTargetY = 0;
			updatedState.cursorX = 0;
			updatedState.cursorY = 0;
			break;

		case DRAW_NEW_ITEM:

			if(action.payload.type === "entity") {

				var mutableDefaultEntity = Object.assign({}, defaultEntity);
				mutableDefaultEntity.key = updatedState.items.length;
				updatedState.items.push(mutableDefaultEntity);
			
			} else if (action.payload.type === "arrow") {
				
				var mutableDefaultArrow = Object.assign({}, defaultArrow);
				mutableDefaultArrow.key = updatedState.items.length;
				updatedState.items.push(mutableDefaultArrow);
			}
			break;
	}

	return updatedState;
}