import React, { Component } from "react";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <section className="footer--section font-12">
        <p className="footer--note">
          Designed by <span className="footer--company">Panthera</span>
        </p>
      </section>
    );
  }
}

export default Footer;
