import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";

import SortBox from "./SortBox";
import MovieCollection from "./MovieCollection";
import Movie from "../cards/Movie";
import Chart from "../pages/Chart";
import { HashRouter as Router, Route } from "react-router-dom";
import "./Home.scss";
import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

export class Home extends Component {
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
      <section className="body--section">
        <header id="showcase" className="header--section">
          <SortBox />
          <SearchForm />
        </header>

        <section class="search--home--section">
          <div class="search--combobox">
            <form id="searchFormV2" onSubmit={this.onSubmit}>
              <h1 className="heading--search">Search</h1>
              <input
                type="text"
                id="searchText"
                name="searchText"
                className="search--page--input"
                placeholder="Search"
                onChange={this.onChange}
              />
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
        </section>

        <section class="card--section">
          <Router>
            <Route exact path="/" component={MovieCollection} />
            <Route exact path="/top" component={MovieCollection} />
            <Route exact path="/chart" component={Chart} />
            <Route path="/movie/:id" component={Movie} />
          </Router>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  text: state.movies.text
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading
})(Home);
