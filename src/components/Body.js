import React from 'react';
import Movie from './Movie';
import '../css/Body.css';

import { RiMovie2Line } from "react-icons/ri";

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			movieList: []
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
					this.setState({ movieList: data.movie });
				})
		}
	}

	render() {
		return (
			<div className="body">
				<div className="container">
					<form className="main-form" onSubmit={this.handleSubmit}>
						<div className="input-wrapper">
							<div className="icon-wrapper">
								<RiMovie2Line size="24"/>
							</div>
							<input
								type="text"
								placeholder="What do you want?"
								value={this.state.inputValue}
								onChange={this.handleChange}
								name="value"
								autoComplete="off"
							/>
						</div>
					</form>
					<div className="movieContainer">
						{
							this.state.movieList.map((movie, index) => {
								return <Movie key={index} movie={movie}></Movie>
							})
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Body;
