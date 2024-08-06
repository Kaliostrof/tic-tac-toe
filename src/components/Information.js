import styles from './Information.module.css';
import PropTypes from 'prop-types';

export const Information = ({ step }) => {
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
	step: PropTypes.string,
};

InformationLayout.propTypes = {
	step: PropTypes.string,
};
