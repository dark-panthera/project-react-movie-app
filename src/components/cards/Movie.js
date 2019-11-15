import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie, setLoading,rateMovie } from "../../actions/searchActions";
import Spinner from "../spinner/Spinner";
import { SPINNER_BREEDING_RHOMBUS } from "../spinner/spinnerTypes";
import StarRatingComponent from 'react-star-rating-component';
import "./Movie.scss";

export class Movie extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  onStarClick(nextValue, prevValue, name) {
    this.props.rateMovie(nextValue, this.props.match.params.id);
  }

  render() {
    const { loading, movie, rating } = this.props;
   
    let movieInfo = (
      <div className="movie--card font-arial">
        <div className="drop-shadow">
          <div className="movie--poster">
            {movie.poster_path === undefined /* null*/ ? (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                alt="card"
                style={{ width: "100%", height: "360px" }}
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt="card"
              />
            )}
          </div>
          <div class="rating--container">
          <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
          </div>
          <div class="movie--details">
            <div class="grid">
              <div class="gf-4 @m-4">Title:</div>
              <div class="gf-8 @m-8">{movie.title}</div>
              <div class="gf-4 @m-4">Genre:</div>
              <div class="gf-8 @m-8">
                {movie.genres !== undefined
                  ? movie.genres.map((genre, index) => (
                      <span key={index}>{genre.name},</span>
                    ))
                  : ""}
              </div> 
              <div class="gf-4 @m-4">Released:</div>
              <div class="gf-8 @m-8">{movie.release_date}</div>
              <div class="gf-4 @m-4">Rated:</div>
              <div class="gf-8 @m-8">{movie.vote_average}</div>
              <div class="gf-4 @m-4">IMDB Director:</div>
              <div class="gf-8 @m-8">{movie.Director}</div>
            </div>
          </div>
          <div className="center">
              <a href="#/">More Details</a>
          </div>
        </div>
        
      </div>
    );

    let content = loading ? (
      <Spinner type={SPINNER_BREEDING_RHOMBUS} color="#ff1d5e" />
    ) : (
      movieInfo
    );

    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoading,rateMovie })(Movie);
