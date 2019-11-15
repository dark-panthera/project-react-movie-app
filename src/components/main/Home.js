import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { connect } from "react-redux";

import SortBox from "./SortBox";
import MovieCollection from "./MovieCollection";
import Movie from "../cards/Movie";
import Chart from "../pages/Chart";
import { HashRouter as Router, Route } from "react-router-dom";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <section className="body--section">
        <header id="showcase" className="header--section">
          <SortBox />
          <SearchForm />
        </header>

        <section class="card--section">
          <Router>
            <Route exact path="/" component={MovieCollection} />
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

export default connect(mapStateToProps)(Home);
