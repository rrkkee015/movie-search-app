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
	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch(`/api/search/${this.state.inputValue}`)
			.then(res=>res.json())
			.then(data=> {
				console.log(data);
			})
	}

	render() {
		return (
			<div className="Body">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
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
