import { store } from '../store';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const Field = ({ onHandleClick }) => {
	const { field } = store.getState();
	console.log(field);
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
	onHandleClick: PropTypes.func,
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onHandleClick: PropTypes.func,
};
