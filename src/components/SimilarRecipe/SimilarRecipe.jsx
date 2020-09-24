import React from "react";

const SimilarRecipe = (props) => {
  const { dataSimilarRecipe } = props;
  console.log("reçu : ", dataSimilarRecipe);
  return <div>Similar Recipe: {JSON.stringify(props.dataSimilarRecipe)}</div>;
};

export default SimilarRecipe;
