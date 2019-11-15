import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "../cards/MovieCard";
import {
  nextPage,
  previousPage,
  setLoading
} from "../../actions/searchActions";

export class MovieCollection extends Component {
  nextPage = e => {
    e.preventDefault();
    const { totalPages, pageNumber } = this.props;
    console.log(pageNumber);
    if (pageNumber < totalPages) {
      console.log(pageNumber);
      let tempValue = pageNumber;
      tempValue++;
      this.props.nextPage(tempValue, this.props.text);
      this.props.setLoading();
    }
  };

  previousPage = e => {
    e.preventDefault();
    const { pageNumber } = this.props;

    if (pageNumber > 1) {
      console.log(pageNumber);
      let tempValue = pageNumber;
      tempValue--;
      this.props.previousPage(tempValue, this.props.text);
      this.props.setLoading();
    }
  };

  render() {
    const { movies } = this.props;
    const { results } = movies;

    let content =
      results !== undefined
        ? results.map((movie, index) => <MovieCard key={index} movie={movie} />)
        : null;

    return (
      <React.Fragment>
        <div className="card--container">{content}</div>
        { results !== undefined && results.length > 0 ?
        <div className="control--holder">
          <button
            type="button"
            className="btn--control"
            onClick={this.previousPage}
          >
            Previous
          </button>

          <button
            type="button"
            className="btn--control"
            onClick={this.nextPage}
          >
            Next
          </button>
        </div> : '' }
      </React.Fragment> 
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  totalPages: state.movies.totalPages,
  totalResults: state.movies.totalResults,
  pageNumber: state.movies.pageNumber,
  text: state.movies.text
});

export default connect(mapStateToProps, { nextPage, previousPage, setLoading })(
  MovieCollection
);
