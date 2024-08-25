import { useDispatch, useSelector } from 'react-redux';
import styles from './Field.module.css';
import PropTypes from 'prop-types';
import { selectCurrentPlayer, selectField, selectGameEnded } from '../store/selectors';
import { setCurrenPlayer, setField, setIsDraw, setIsGameEnded } from '../store/actions';
import { WIN_PATTERNS } from '../constants/win-pattern';

export const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectGameEnded);

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

	return <FieldLayout field={field} handleClick={handleClick} />;
};

const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles['main-field']}>
			{field.map((elem, index) => {
				return (
					<button
						key={index}
						className={styles.btn}
						onClick={() => {
							handleClick(index);
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
	handleClick: PropTypes.func,
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
