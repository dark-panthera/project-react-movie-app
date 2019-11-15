import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="card drop-shadow">
        <div className="card--image">
          {/*<img src="images/Aladdin 2019.jpg" alt="" />*/
          movie.poster_path === null ? (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
              alt="card"
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
              alt="card"
            />
          )}
        </div>
        <div className="card--information">
          <div className="card--title">
            <span>{movie.title}</span>
          </div>
          <div className="card--year">
            <span>
              {movie.release_date !== undefined
                ? movie.release_date.substring(0, 4)
                : ""}
            </span>
          </div>
        </div>
        <div className="card--view--button">
          <Link to={`/movie/${movie.id}`}>View more</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;