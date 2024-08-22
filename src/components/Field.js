import { connect } from 'react-redux';
// import styles from './Field.module.css';
import { setCurrenPlayer, setField, setIsDraw, setIsGameEnded } from '../store/actions';
import { WIN_PATTERNS } from '../constants/win-pattern';
import { Component } from 'react';

class FieldContainer extends Component {
	constructor() {
		super();
	}

	handleClick = (index) => {
		if (this.props.field[index] === '' && this.props.isGameEnded === false) {
			this.props.field[index] = this.props.currentPlayer;
			this.props.onSetField([...this.props.field]);

			let victory = false;

			const isFieldDraw = this.props.field.every((el) => {
				return el !== '';
			});
			this.props.onSetIsDraw(isFieldDraw);

			WIN_PATTERNS.forEach((arr) => {
				const isWinner = arr.every(
					(index) => this.props.field[index] === this.props.currentPlayer,
				);
				if (isWinner) {
					this.props.onSetGameEnd();
					victory = true;
				}
			});
			if (!victory) {
				this.props.onSetCurrentPlayer();
			}
		}
	};

	render() {
		return (
			<div
				// className={styles['main-field']}
				className="flex flex-wrap max-w-64 mb-4 mt-2"
			>
				{this.props.field.map((elem, index) => {
					return (
						<button
							key={index}
							// className={styles.btn}
							className="size-20 ml-1 mb-1 hover:rounded-2xl  text-5xl font-bold text-zinc-950 shadow-sm shadow-blue-900 rounded-md bg-gradient-to-tr from-blue-400 via-blue-900 to-blue-900"
							onClick={() => {
								this.handleClick(index);
							}}
						>
							{elem}
						</button>
					);
				})}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onSetField: (field) => dispatch(setField(field)),
	onSetIsDraw: (isFieldDraw) => dispatch(setIsDraw(isFieldDraw)),
	onSetGameEnd: () => dispatch(setIsGameEnded()),
	onSetCurrentPlayer: () => dispatch(setCurrenPlayer()),
});

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	field: state.field,
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);

// Field.propTypes = {
// 	handleClick: PropTypes.func,
// };

// FieldLayout.propTypes = {
// 	field: PropTypes.array,
// 	handleClick: PropTypes.func,
// };
