import { connect } from 'react-redux';
// import styles from './Information.module.css';
import { Component } from 'react';

class InformationContainer extends Component {
	constructor() {
		super();
		this.step = '';
	}

	render() {
		if (this.props.isDraw === true) {
			this.step = 'Ничья';
		} else if (this.props.isDraw === false && this.props.isGameEnded === true) {
			this.step = `Победа: ${this.props.currentPlayer}`;
		} else if (this.props.isDraw === false && this.props.isGameEnded === false) {
			this.step = `Ходит: ${this.props.currentPlayer}`;
		}
		return (
			<div
				// className={styles['main-info']}
				className="flex justify-center"
			>
				<div
					// className={styles.text}
					className="w-28 font-bold font-serif text-xl"
				>
					{this.step}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export const Information = connect(mapStateToProps)(InformationContainer);
