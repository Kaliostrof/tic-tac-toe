// import styles from './Game.module.css';
import { Field } from './components/Field';
import { Information } from './components/Information';
import { connect } from 'react-redux';
import { resetGame } from './store/actions';
import { Component } from 'react';
// import './index.css';

class GameContainer extends Component {
	constructor(props) {
		super(props);
	}

	// resetBtnHandler() {
	// 	console.log(resetGame());
	// 	this.setState(resetGame());
	// }
	render() {
		return (
			<div
				// className={styles.app}
				className="flex ml-20 mr-20 py-10 justify-center box-border shadow-2xl shadow-green-600 h-screen bg-gradient-to-tr from-lime-200 via-green-500 to-lime-200"
			>
				<div
					// className={styles.row}
					className="table-row justify-center text-center max-w-30"
				>
					<Information />
					<Field />
					<button
						onClick={this.props.resetBtnHandler}
						// className={styles['re-btn']}
						className="lowercase font-serif font-bold text-center shadow-md shadow-sky-800 p-2 rounded-3xl bg-gradient-to-tr from-lime-200 via-blue-800 to-blue-900 hover:animate-pulse"
					>
						Начать заново
					</button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	resetBtnHandler: () => dispatch(resetGame()),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);

// GameContainer.propTypes = {
// 	handleClick: PropTypes.func,
// };
