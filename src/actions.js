export const setCurrenPlayer = (player) => ({
	type: 'SET_CURRENT_PLAYER',
	payload: player,
});

export const setField = (data) => ({
	type: 'SET_FIELD',
	payload: data,
});

export const setIsDraw = (draw) => ({
	type: 'SET_IS_DRAW',
	payload: draw,
});

export const setIsGameEnded = () => ({
	type: 'SET_IS_GAME_ENDED',
});

export const resetGame = () => ({
	type: 'RESET_GAME',
});

export const setStep = (step) => ({
	type: 'SET_STEP',
	payload: step,
});
