import styles from './Game.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information';
import PropTypes from 'prop-types';
import { store } from './store';
import { useRender } from './useRender';
import {
	resetGame,
	setCurrenPlayer,
	setField,
	setIsDraw,
	setIsGameEnded,
} from './actions';

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
	const { field } = store.getState();
	const { currentPlayer } = store.getState();
	const { isDraw } = store.getState();
	const { isGameEnded } = store.getState();

	useRender();
	// const [currentPlayer, setCurrentPlayer] = useState('×');
	// const [isGameEnded, setIsGameEnded] = useState(false);
	// const [isDraw, setIsDraw] = useState(false);
	// const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const resetBtnHandler = () => {
		store.dispatch(resetGame());
	};

	let step;
	if (isDraw === true) {
		step = 'Ничья';
	} else if (isDraw === false && isGameEnded === true) {
		step = `Победа: ${currentPlayer}`;
	} else if (isDraw === false && isGameEnded === false) {
		step = `Ходит: ${currentPlayer}`;
	}

	const onHandleClick = (index) => {
		if (field[index] === '' && isGameEnded === false) {
			field[index] = currentPlayer;
			const updatedField = [...field];
			store.dispatch(setField(updatedField)); // setField(updatedField);
			const player = currentPlayer === '×' ? 'o' : '×';
			let victory = false;

			const isFieldDraw = field.every((el) => {
				return el !== '';
			});
			store.dispatch(setIsDraw(isFieldDraw)); // setIsDraw(isDraw);
			WIN_PATTERNS.forEach((arr) => {
				const isWinner = arr.every((index) => field[index] === currentPlayer);
				if (isWinner === true) {
					store.dispatch(setIsGameEnded()); // setIsGameEnded(true);
					victory = true;
				}
			});
			if (victory === false) {
				store.dispatch(setCurrenPlayer(player)); // setCurrentPlayer((newPlayer) => player);
			}
		}
		console.log('Draw', isDraw);
		console.log('GameEnded', isGameEnded);
		console.log('player', currentPlayer);
		console.log('player', field);
	};

	return (
		<>
			<GameLayout
				onHandleClick={onHandleClick}
				step={step}
				onResetBtnHandler={resetBtnHandler}
			/>
		</>
	);
};

const GameLayout = ({ onResetBtnHandler, onHandleClick, step }) => {
	return (
		<div className={styles.app}>
			<div className={styles.row}>
				<Information step={step} />
				<Field onHandleClick={onHandleClick} />
				<button onClick={onResetBtnHandler} className={styles['re-btn']}>
					Начать заново
				</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	onHandleClick: PropTypes.func,
	onResetBtnHandler: PropTypes.func,
	step: PropTypes.string,
};
