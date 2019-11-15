import * as d3 from "d3";
const MARGIN = { TOP: 10, BOTTOM: 150, LEFT: 70, RIGHT: 10 };
const WIDTH = 450 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 450 - MARGIN.TOP - MARGIN.BOTTOM;

export default class VotedD3Chart {
  constructor(element) {
    const vis = this;

    vis.svg = d3
      .select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    vis.svg
      .append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 140)
      .attr("text-anchor", "middle")
      .text("Top 10 Movies") 

    vis.svg
      .append("text")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
     .attr("transform", "rotate(80)")
      .text("Rates")
      .attr("transform", "rotate(-90)")

    vis.xAxisGroup = vis.svg
      .append("g")
      .attr("transform", `translate(0,${HEIGHT})`);

    vis.yAxisGroup = vis.svg.append("g");
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1&region=US`;

    d3.json(url).then(datasets => {
      let array = datasets.results;

      if (array.length > 0 && array.length > 10) {
        array = datasets.results.slice(0, 10);
      }

      vis.data = array;
      vis.update();
    });
  }

  update() {
    const vis = this;

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(vis.data, d => d.vote_count) * 0.98,
        d3.max(vis.data, d => {
          return d.vote_count;
        })
      ])
      .range([HEIGHT, 0]);

    const x = d3
      .scaleBand()
      .domain(vis.data.map(d => d.title))
      .range([0, WIDTH])
      .padding(0.4);

    const xAxisCall = d3.axisBottom(x);
    vis.xAxisGroup
      .transition()
      .duration(500)
      .call(xAxisCall)
      .selectAll("text")
      .attr("y", 0)
      .attr("x", 9)
      .attr("dy", ".35em")
      .attr("transform", "rotate(80)")
      .style("text-anchor", "start")
    const yAxisCall = d3.axisLeft(y);
    vis.yAxisGroup
      .transition()
      .duration(500)
      .call(yAxisCall)
      .selectAll("text");

    //DATA JOIN
    const rects = vis.svg.selectAll("rect").data(vis.data);

    //EXIT
    rects
      .exit()
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", HEIGHT)
      .remove();

    //UPDATE
    rects
      .transition()
      .duration(500)
      .attr("x", d => x(d.title))
      .attr("y", d => y(d.vote_count))
      .attr("width", x.bandwidth)
      .attr("height", d => HEIGHT - y(d.vote_count));

    //ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", d => x(d.title))
      .attr("width", x.bandwidth)
      .attr("fill", "red")
      .attr("y", HEIGHT)
      .transition()
      .duration(500)
      .attr("height", d => HEIGHT - y(d.vote_count))
      .attr("y", d => y(d.vote_count));
  }
}
