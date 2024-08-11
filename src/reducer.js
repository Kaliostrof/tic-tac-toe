export const initialState = {
	currentPlayer: '×',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
	step: 'Ходит ×',
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET_GAME': {
			return {
				...state,
				currentPlayer: '×',
				isGameEnded: false,
				isDraw: false,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		}
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: state.currentPlayer === '×' ? 'o' : '×',
			};
		}
		case 'SET_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: payload,
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: true,
			};
		}
		case 'SET_STEP': {
			return {
				...state,
				step: payload,
			};
		}
		default:
			return state;
	}
};
