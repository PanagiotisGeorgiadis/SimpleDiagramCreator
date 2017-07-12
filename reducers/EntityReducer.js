// import { RESIZE_ENTITY_CONTAINER, MOVE_ENTITY_CONTAINER, DRAW_NEW_ENTITY, REMOVE_ENTITY } from "../actions/EntityActions";
import { DRAW_NEW_ENTITY, REMOVE_ENTITY, ENTITY_BODY_UPDATE, ENTITY_HEADER_UPDATE, ENTITY_KEY_UPDATE } from "../actions/EntityActions";

const numOfEntities = 1;

export default (state = null, action) => {

	var updatedState = Object.assign({}, state);

	switch(action.type) {

		case DRAW_NEW_ENTITY:

			var mutableDefaultEntity = Object.assign({}, defaultEntity);
			mutableDefaultEntity.key = updatedState.entities.length;

			updatedState.entities.push(mutableDefaultEntity);
			break;

		case REMOVE_ENTITY:

			updatedState.entities.splice(action.payload.key, numOfEntities);
			break;

		case ENTITY_BODY_UPDATE:

			updatedState.entities[action.payload.key].bodyValue = action.payload.bodyValue;
			break;

		case ENTITY_HEADER_UPDATE:

			updatedState.entities[action.payload.key].headerValue = action.payload.headerValue;
			break;

		default:
			return updatedState;
	}

	return updatedState;
}