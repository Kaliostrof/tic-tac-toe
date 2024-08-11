import { useSelector } from 'react-redux';
import styles from './Field.module.css';
import PropTypes from 'prop-types';
import { selectField } from '../selectors';

export const Field = ({ handleClick }) => {
	const field = useSelector(selectField);
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
