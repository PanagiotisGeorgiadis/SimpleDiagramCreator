export const defaultEntity = {

	key: 0,
	type: "entity",
	
	width: "400px",
	height: "400px",
	top: undefined,
	left: undefined,

	headerValue: "",
	bodyValue: "",

	entityHeaderValueHandler: null,
	entityBodyValueHandler: null,
	onDragStartHandler: null,
};

export const defaultArrow = {

	key: 0,
	type: "arrow",

	width: "300px",
	height: "150px",
	top: undefined,
	left: undefined,

	rotate: undefined,
};

const initialState = {
	EntityReducer: {
		entities: [
			{
				key: 0,
				width: "400px",
				height: "400px",
				top: undefined,
				left: undefined,

				headerValue: "",
				bodyValue: "",				

				entityHeaderValueHandler: null,
				entityBodyValueHandler: null,
				onDragStartHandler: null,
			},
		],
	},
	ArrowReducer: {
		arrows: [
			{
				key: 0,
				width: "300px",
				height: "150px",
				top: undefined,
				left: undefined,

				rotate: undefined,
			},
		],
	},
	DiagramReducer: {

		items: [
			{
				key: 0,
				type: "entity",

				width: "400px",
				height: "400px",
				top: undefined,
				left: undefined,

				headerValue: "",
				bodyValue: "",

				entityHeaderValueHandler: null,
				entityBodyValueHandler: null,
				onDragStartHandler: null,
			},
			{
				key: 0,
				type: "arrow",

				width: "300px",
				height: "150px",
				top: undefined,
				left: undefined,

				rotate: undefined,
			}
		],
		targetKey: undefined,
		targetElement: undefined,
		cursorOnTargetX: undefined,
		cursorOnTargetY: undefined,
		cursorX: undefined,
		cursorY: undefined,

	},
	menuReducer: {
		
	}
	
};

export default initialState;