import React from 'react';
import '../css/Body.css'

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			inputValue: e.target.value,
		})
		console.log(this.state.inputValue);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			inputValue: '',
		})
	}

	render() {
		return (
			<div className="Body">
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="What do you want?"
						value={this.state.inputValue}
						onChange={this.handleChange}
						name="value"
					/>
					<button type="submit">Gotcha!</button>
				</form>
			</div>
		)
	}
}

export default Body;
