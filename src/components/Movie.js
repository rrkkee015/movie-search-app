import React from 'react';
import '../css/Movie.css'

class Movie extends React.Component {
  render() {
    return (
      <div className="movie">
        <img className="movie-img" src={this.props.movie.thumbnail}/>
      </div>
    )
  }
}

export default Movie;
