import React from "react";
import { ThreeDots } from "./Spinners"
import '../App.css'


export default class Loader extends React.Component {

  svgRenderer = () => {
   
    return <ThreeDots {...this.props} />;
      
  };

  render() {
    const { type } = this.props;
    return <div className="main-block">{this.svgRenderer()}</div>;
  }
}