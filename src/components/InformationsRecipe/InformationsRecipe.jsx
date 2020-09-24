import React, { Component } from "react";

import SimilarRecipe from "../SimilarRecipe";

import getInformationsRecipe from "../../api/getInformationsRecipe";
import getSimilarRecipe from "../../api/getSimilarRecipe";

export default class InformationsRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informationsRecipe: {},
      dataSimilarRecipe: {},
    };
  }

  async componentDidMount() {
    // Get informations recipe
    const resInformationsRecipe = await getInformationsRecipe(
      this.props.idRecipe
    );
    this.setState({ informationsRecipe: resInformationsRecipe });
    console.log("Informations recipe : ", resInformationsRecipe);

    // Get similar recipes
    const resDataSimilarRecipe = await getSimilarRecipe(this.props.idRecipe);
    this.setState({ dataSimilarRecipe: resDataSimilarRecipe });
    console.log("Similar recipe : ", resDataSimilarRecipe);
  }

  render() {
    const { idRecipe } = this.props;
    const { dataSimilarRecipe } = this.state;
    console.log(this.props);
    return (
      <div>
        <span> coucou id : {idRecipe} </span>
        <SimilarRecipe dataSimilarRecipe={dataSimilarRecipe} />
      </div>
    );
  }
}
