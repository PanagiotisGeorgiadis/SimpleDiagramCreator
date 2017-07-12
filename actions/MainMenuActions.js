export const MENU_NEW_ENTITY = "MENU/NEW_ENTITY";
export const MENU_NEW_ARROW = "MENU/NEW_ARROW";
export const MENU_SAVE_DIAGRAM = "MENU/SAVE_DIAGRAM";
export const MENU_TOGGLE_HINTS = "MENU/TOGGLE_HINTS";



export const drawNewEntity = () => ({
	type: MENU_NEW_ENTITY,
	payload: "drawNewEntity Action fired!"
});

export const drawNewArrow = () => ({
	type: MENU_NEW_ARROW,
	payload: "drawNewArrow Action fired!"
});

export const saveDiagram = () => ({
	type: MENU_SAVE_DIAGRAM,
	payload: "saveDiagram Action fired!"
});

export const toggleHintsBar = () => ({
	type: MENU_TOGGLE_HINTS,
	payload: "toggleHintsBar Action fired!"
});

