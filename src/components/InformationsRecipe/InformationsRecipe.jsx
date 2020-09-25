import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import SimilarRecipe from "../SimilarRecipe";
import getInformationsRecipe from "../../api/getInformationsRecipe";
import getSimilarRecipe from "../../api/getSimilarRecipe";

export default class InformationsRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informationsRecipe: [],
      ingredientsRecipe: [],
      dataSimilarRecipe: [],
    };
  }

  async componentDidMount() {
    // Get informations recipe
    const resInformationsRecipe = await getInformationsRecipe(
      this.props.idRecipe
    );
    const resDataSimilarRecipe = await getSimilarRecipe(this.props.idRecipe);

    this.setState({ informationsRecipe: resInformationsRecipe });
    console.log("Informations recipe : ", resInformationsRecipe);
    this.setState({
      ingredientsRecipe: resInformationsRecipe.extendedIngredients,
    });
    console.log(
      "Informations recipe : ",
      resInformationsRecipe.extendedIngredients
    );

    // Get similar recipes

    this.setState({ dataSimilarRecipe: resDataSimilarRecipe });
    console.log("Similar recipe : ", resDataSimilarRecipe);
  }

  render() {
    const {
      dataSimilarRecipe,
      informationsRecipe,
      ingredientsRecipe,
    } = this.state;
    console.log(this.props);
    console.log("vegeratian : ", informationsRecipe.healthScore);
    return (
      <div>
        <Card>
          <CardImg
            top
            width="20%"
            src={informationsRecipe.image}
            alt={informationsRecipe.title}
          />
          <CardBody>
            <CardTitle>{ingredientsRecipe.title}</CardTitle>
            <CardSubtitle>
              Part of Person(n) : {informationsRecipe.servings}
            </CardSubtitle>
            <CardSubtitle>
              Time (minutes) : {informationsRecipe.readyInMinutes}
            </CardSubtitle>
            - Ingredients
            <CardText>
              {ingredientsRecipe.map((ingredient) => (
                <li> {ingredient.originalString} </li>
              ))}
            </CardText>
          </CardBody>
        </Card>
        <SimilarRecipe dataSimilarRecipe={dataSimilarRecipe} />
      </div>
    );
  }
}
