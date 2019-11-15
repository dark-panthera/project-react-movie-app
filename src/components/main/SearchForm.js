import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
    window.location.hash = "/";
  };

  render() {
    return (
      <section className="search--section">
        <div className="input search--bar">
          <div className="input">
            <form id="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                id="searchText"
                name="searchText"
                className="input--movie"
                placeholder="Search"
                onChange={this.onChange} 
              />
              <label htmlFor="searchText" className="fa fa-filter input--icon"></label>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(SearchForm);