import React, { Component } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <section className="sidebar--section mobile--style">
        <div className="logo--section">
          <img src={require("../../assets/logo.svg")} alt="logo" />
        </div>
        <div className="menu--section">
          <ul className="menu--list">
            <li>
              <Link to="/">
                <span className="fa fa-home"></span> Home
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-film"></span> New Menu
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-ticket"></span> Genre
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-heart"></span> Favourites
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="fa fa-star"></span> Rated
              </Link>
            </li>
            <li>
              <Link to="chart">
                <span className="fa fa-pie-chart"></span> Charts
              </Link>
            </li>
          </ul>
        </div>
        <div className="year--section font-12">
          <span className="year">{new Date().getFullYear()}</span>
        </div>
      </section>
    );
  }
}

export default Navbar;

/*


            <div className="navbar">
                <div className="logo--container">
                    <div className="logo"></div>
                </div>
                <div className="spacing--container"></div>

                <div className="nav nav--container font-arial">
                    <ul>
                        <li><Link to="#" className="menu-item"><span className="menu-item-icon fa fa-film"></span> New Movies</Link></li>
                        <li><Link to="#" className="menu-item"><span className="menu-item-icon fas fa-ticket-alt"></span> Genres</Link></li>
                        <li><Link to="#" className="menu-item"><span className="menu-item-icon fa fa-heart"></span> Favourites</Link></li>
                        <li><Link to="#" className="menu-item"><span className="menu-item-icon fas fa-star"></span> Rated</Link></li>
                        <li><Link to="chart" className="menu-item"><span className="menu-item-icon fa fa-chart-pie"></span> Charts</Link></li>
                    </ul>
                </div>

                <div className="year--container font-arial indigo">{new Date().getFullYear()}</div>
            </div>*/
