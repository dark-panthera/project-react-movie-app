import React, { Component } from "react";
import SearchForm from "../main/SearchForm";
import { connect } from "react-redux";
import Spinner from "../spinner/Spinner";
import { SPINNER_BREEDING_RHOMBUS } from "../spinner/spinnerTypes";
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
  render() {
    const { loading } = this.props;

    return (
        <div className="container">
            {this.props.text}
            <SearchForm />
            {loading ? 
            (<Spinner type={SPINNER_BREEDING_RHOMBUS} color="#ff1d5e" />) : (<MoviesContainer />)}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  text: state.movies.text
});

export default connect(mapStateToProps)(Landing);
