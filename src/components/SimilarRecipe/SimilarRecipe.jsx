import React, { Component } from "react";

export default class SimilarRecipe extends Component {
  render() {
    console.log(this.props);
    return <div> coucou id : {this.props.idRecipe}</div>;
  }
}
