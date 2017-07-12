
import { MENU_NEW_ENTITY, MENU_NEW_ARROW, MENU_SAVE_DIAGRAM, MENU_TOGGLE_HINTS } from "../actions/MainMenuActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);
	// console.log(state);

	switch(action.type) {

		case MENU_NEW_ENTITY:

			// updatedState.entities[action.payload.key].bodyValue = action.payload.bodyValue;
			console.log(action.payload);
			break;

		case MENU_NEW_ARROW:

			// updatedState.entities[action.payload.key].headerValue = action.payload.headerValue;
			console.log(action.payload);
			break;

		case MENU_SAVE_DIAGRAM:

			// updatedState.entities[action.payload.key].bodyValue = action.payload.bodyValue;
			console.log(action.payload);
			break;

		case MENU_TOGGLE_HINTS:

			// updatedState.entities[action.payload.key].bodyValue = action.payload.bodyValue;
			console.log(action.payload);
			break;

		default:
			return updatedState;
	}

	return updatedState;
}