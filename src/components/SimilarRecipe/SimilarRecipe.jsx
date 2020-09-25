import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class SimilarRecipe extends Component {
  constructor(props) {
    super(props);

    this.onHandleClickSimilarRecipe = this.onHandleClickSimilarRecipe.bind(
      this
    );
  }

  onHandleClickSimilarRecipe(e) {
    const { setIdCurrentRecipe } = this.props;
    console.log("Id similar recipe selected :", e);
    // setIdCurrentRecipe(id);
  }

  render() {
    const { dataSimilarRecipe } = this.props;
    console.log("reçu : ", dataSimilarRecipe);
    return (
      <div>
        <ListGroup>
          <ListGroupItem active>Similar recipe</ListGroupItem>
          {dataSimilarRecipe.map((recipe) => (
            <ListGroupItem onClick={this.onHandleClickSimilarRecipe}>
              {" "}
              <Link to={"/informationsRecipe/" + recipe.id}>
                {recipe.title} <Badge pill>{recipe.servings}</Badge>
              </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default SimilarRecipe;
