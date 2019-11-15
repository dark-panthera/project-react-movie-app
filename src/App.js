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