import styles from './Game.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
	resetGame,
	setCurrenPlayer,
	setField,
	setIsDraw,
	setIsGameEnded,
} from './actions';
import {
	selectCurrentPlayer,
	// selectDraw,
	selectField,
	selectGameEnded,
} from './selectors';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Game = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	// const isDraw = useSelector(selectDraw);
	const isGameEnded = useSelector(selectGameEnded);

	const dispatch = useDispatch();

	const resetBtnHandler = () => {
		dispatch(resetGame());
	};

	const handleClick = (index) => {
		if (field[index] === '' && isGameEnded === false) {
			field[index] = currentPlayer;
			dispatch(setField([...field]));

			let victory = false;

			const isFieldDraw = field.every((el) => {
				return el !== '';
			});
			dispatch(setIsDraw(isFieldDraw));

			WIN_PATTERNS.forEach((arr) => {
				const isWinner = arr.every((index) => field[index] === currentPlayer);
				if (isWinner === true) {
					dispatch(setIsGameEnded());
					victory = true;
				}
			});
			if (victory === false) {
				dispatch(setCurrenPlayer());
			}
		}
	};

	return (
		<>
			<GameLayout
				handleClick={handleClick}
				// step={step}
				onResetBtnHandler={resetBtnHandler}
			/>
		</>
	);
};

const GameLayout = ({ onResetBtnHandler, handleClick }) => {
	return (
		<div className={styles.app}>
			<div className={styles.row}>
				<Information />
				<Field handleClick={handleClick} />
				<button onClick={onResetBtnHandler} className={styles['re-btn']}>
					Начать заново
				</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	handleClick: PropTypes.func,
	step: PropTypes.string,
};
