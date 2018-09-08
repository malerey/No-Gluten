import React from "react";
import { ThreeDots } from "./Spinners"


export default class Loader extends React.Component {

  svgRenderer = () => {
   
    return <ThreeDots {...this.props} />;
      
  };

  render() {
    const { type } = this.props;
    return <div>{this.svgRenderer()}</div>;
  }
}