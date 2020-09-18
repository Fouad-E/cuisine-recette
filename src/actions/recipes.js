import actions from "./constants";

export function setIdRecipe(idCurrentRecipe) {
  return {
    type: actions.SET_ID_CURRENT_RECIPE,
    idCurrentRecipe,
  };
}
