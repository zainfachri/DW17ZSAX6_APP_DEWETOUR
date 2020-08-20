import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);
