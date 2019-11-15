import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/main-body/Navbar";
import Footer from "./components/main-body/Footer";
import Home from "./components/main/Home";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="grid layout">
            <Navbar />
            <Home />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
/*https://www.youtube.com/watch?v=T4YfrzsVLTs&list=PLG3RxIUKLJlbDDGeeoUCkinS2DUybp_1o&index=11
https://css-tricks.com/snippets/css/complete-guide-grid/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas
https://collectui.com/designers/luddeh
https://collectui.com/designers/luddeh/analytics-chart
https://www.d3-graph-gallery.com/graph/histogram_binSize.html

 <Route exact path="/" component={Home} />
              <Route exact path="/movie/:id" component={Movie} />
*/
