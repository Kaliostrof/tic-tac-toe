import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isDraw, isGameEnded }) => {
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

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
};

InformationLayout.propTypes = {
	step: PropTypes.string,
};
