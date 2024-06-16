import styles from './Game.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const resetBtnHandler = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		const resetField = ['', '', '', '', '', '', '', '', ''];
		setField(resetField);
	};
	return (
		<>
			<GameLayout
				field={field}
				onSetField={setField}
				isDraw={isDraw}
				onSetDraw={setIsDraw}
				currentPlayer={currentPlayer}
				onSetCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				onSetIsGameEnded={setIsGameEnded}
				onResetBtnHandler={resetBtnHandler}
			/>
		</>
	);
};

const GameLayout = ({
	field,
	onSetField,
	isDraw,
	onSetDraw,
	currentPlayer,
	isGameEnded,
	onSetIsGameEnded,
	onSetCurrentPlayer,
	onResetBtnHandler,
}) => {
	return (
		<div className={styles.app}>
			<div className={styles.row}>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<Field
					field={field}
					onSetField={onSetField}
					currentPlayer={currentPlayer}
					onSetCurrentPlayer={onSetCurrentPlayer}
					onSetDraw={onSetDraw}
					onSetIsGameEnded={onSetIsGameEnded}
					isGameEnded={isGameEnded}
				/>
				<button onClick={onResetBtnHandler} className={styles['re-btn']}>
					Начать заново
				</button>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	onSetField: PropTypes.func,
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	onSetDraw: PropTypes.func,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	onSetCurrentPlayer: PropTypes.func,
	onResetBtnHandler: PropTypes.func,
};
