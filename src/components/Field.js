import styles from './Field.module.css';
import PropTypes from 'prop-types';

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

export const Field = ({
	field,
	onSetField,
	currentPlayer,
	onSetCurrentPlayer,
	onSetDraw,
	onSetIsGameEnded,
	isGameEnded,
}) => {
	const onHandleClick = (index) => {
		if (field[index] === '' && isGameEnded === false) {
			field[index] = currentPlayer;
			const updatedField = [...field];
			onSetField(updatedField);
			const player = currentPlayer === 'X' ? '0' : 'X';
			let victory = false;

			const isDraw = field.every((el) => {
				return el !== '';
			});
			onSetDraw(isDraw);
			WIN_PATTERNS.forEach((arr) => {
				const isWinnerX = arr.every((index) => {
					return field[index] === 'X';
				});
				const isWinner0 = arr.every((index) => {
					return field[index] === '0';
				});
				if (isWinnerX === true || isWinner0 === true) {
					onSetIsGameEnded(true);
					victory = true;
				}
			});
			if (victory === false) {
				onSetCurrentPlayer((newPlayer) => player);
			}
		}
	};
	return <FieldLayout field={field} onHandleClick={onHandleClick} />;
};

const FieldLayout = ({ field, onHandleClick }) => {
	return (
		<div className={styles['main-field']}>
			{field.map((elem, index) => {
				return (
					<button
						key={index}
						className={styles.btn}
						onClick={() => {
							onHandleClick(index);
						}}
					>
						{elem}
					</button>
				);
			})}
		</div>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	onSetField: PropTypes.func,
	currentPlayer: PropTypes.string,
	onSetCurrentPlayer: PropTypes.func,
	onSetDraw: PropTypes.func,
	onSetIsGameEnded: PropTypes.func,
	isGameEnded: PropTypes.bool,
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onHandleClick: PropTypes.func,
};
