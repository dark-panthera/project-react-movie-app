import React, { Component } from "react";
import { connect } from "react-redux";
import { sortBy, setLoading, getAllMovies } from "../../actions/searchActions";
import { Link } from "react-router-dom";

export class SortBox extends Component {
  onSortByClick = column => {
    // event.preventDefault();
    console.log(column);
    this.props.getAllMovies(column, 1);
    this.props.sortBy(column);
    this.props.setLoading();
    //window.location.hash = "/";
  };

  render() {
    return (
      <section className="sort--section">
        <ul className="sort--ul">
          <li>Sort By:</li>
          <li>
            <Link to="/" onClick={() => this.onSortByClick("RATE")}>
              Rate
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => this.onSortByClick("Year")}>
              Year
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => this.onSortByClick("Popularity")}>
              Popularity
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(mapStateToProps, { sortBy, setLoading, getAllMovies })(
  SortBox
);
/*
<section class="sort--section">
            <ul class="sort--ul">
              <li>Sort By:</li>
              <li><a href="#">Rate</a></li>
              <li><a href="#">Year</a></li>
              <li><a href="#">Popularity</a></li>
            </ul>
          </section>*/
