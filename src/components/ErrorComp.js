import React, { Component } from "react";
import { Alert } from "../styledComps/Utilities";

class ErrorComp extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Alert>Some error has occured. Please try again</Alert>;
    }
    return this.props.children;
  }
}

export default ErrorComp;
