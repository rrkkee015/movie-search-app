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
		if (this.state.inputValue) {
			fetch(`/api/search/${this.state.inputValue}`)
				.then(res=>res.json())
				.then(data=> {
					console.log(data);
				})
		}
	}

	render() {
		return (
			<div className="body">
				<form className="main-form" onSubmit={this.handleSubmit}>
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="What do you want?"
							value={this.state.inputValue}
							onChange={this.handleChange}
							name="value"
						/>
					</div>
					<button type="submit">Gotcha!</button>
				</form>
			</div>
		)
	}
}

export default Body;
