import { useSelector } from 'react-redux';
import styles from './Information.module.css';
import PropTypes from 'prop-types';
import { selectCurrentPlayer, selectDraw, selectGameEnded } from '../selectors';

export const Information = () => {
	const isDraw = useSelector(selectDraw);
	const isGameEnded = useSelector(selectGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	let step;
	if (isDraw === true) {
		step = 'Ничья';
	} else if (isDraw === false && isGameEnded === true) {
		step = `Победа: ${currentPlayer}`;
	} else if (isDraw === false && isGameEnded === false) {
		step = `Ходит: ${currentPlayer}`;
	}
	return <InformationLayout step={step} />;
};

const InformationLayout = ({ step }) => {
	return (
		<div className={styles['main-info']}>
			<div className={styles.text}>{step}</div>
		</div>
	);
};

// Information.propTypes = {
// 	step: PropTypes.string,
// };

InformationLayout.propTypes = {
	step: PropTypes.string,
};
