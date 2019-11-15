import React, { Component } from "react";
import RatedD3Chart from "./RatedD3Chart";
import VotedD3Chart from "./VotedD3Chart";
import "./D3Chart.scss";

class Chart extends Component {
  componentDidMount() {
    //const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1&region=US`
    new RatedD3Chart(this.refs.chartv1);
    new VotedD3Chart(this.refs.chartv2);
    //new D3Chart(this.refs.chartv2);
  }

  render() {
    return (
      <div>
        <div className="section--rated">
          <h1 className="">Top 10: Movies / Rated</h1>
          <div ref="chartv1"></div>
        </div>
        <div className="section--voted">
          <h1>Top 10: Movies / Voted</h1>
          <div ref="chartv2"></div>
        </div>
      </div>
    );
  }
}

export default Chart;
