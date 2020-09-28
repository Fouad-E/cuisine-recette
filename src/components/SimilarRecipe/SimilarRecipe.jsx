import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

import "./SimilarRecipe.css";

const SimilarRecipe = (props) => {
  const { dataSimilarRecipe, updateInformationsRecipe } = props;
  return (
    <div id="similarRecipe">
      <ListGroup>
        <ListGroupItem active>Similar recipe</ListGroupItem>
        {dataSimilarRecipe.map((recipe) => (
          <ListGroupItem>
            {" "}
            <Link
              to={"/informationsRecipe/" + recipe.id}
              onClick={() => updateInformationsRecipe(recipe.id)}
            >
              {recipe.title} <br />
              <Badge pill>{recipe.servings} person(s)</Badge>
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default SimilarRecipe;
