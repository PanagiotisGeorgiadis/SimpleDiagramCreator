import { RESIZE_ARROW_CONTAINER, MOVE_ARROW_CONTAINER, DRAW_NEW_ARROW, REMOVE_ARROW } from "../actions/ArrowActions";

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case RESIZE_ARROW_CONTAINER:

			updatedState.width = action.payload.width;
			updatedState.height = action.payload.height;
			break;

		case MOVE_ARROW_CONTAINER:

			updatedState.left = action.payload.left;
			updatedState.right = action.payload.right;
			break;

		case DRAW_NEW_ARROW:

			console.log("DRAW_NEW_ARROW action clicked");

		case REMOVE_ARROW:

			console.log("REMOVE_ARROW action clicked");
	}

	return updatedState;
}