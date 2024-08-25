import styles from './Game.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetGame } from './store/actions';

export const Game = () => {
	const dispatch = useDispatch();

	const resetBtnHandler = () => {
		dispatch(resetGame());
	};

	return (
		<>
			<GameLayout onResetBtnHandler={resetBtnHandler} />
		</>
	);
};

const GameLayout = ({ onResetBtnHandler }) => {
	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<div className={styles.row}>
					<Information />
					<Field />
					<button onClick={onResetBtnHandler} className={styles['re-btn']}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};

GameLayout.propTypes = {
	handleClick: PropTypes.func,
	step: PropTypes.string,
};
