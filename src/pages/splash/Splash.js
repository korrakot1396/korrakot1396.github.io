import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <LoaderLogo id="logo" />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    this.aniMatedSplash = <AnimatedSplash/>;
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : this.aniMatedSplash;
  }
}

export default Splash;
