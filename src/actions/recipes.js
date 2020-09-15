import actions from "./constants";

export const setIdRecipe = (id) => ({
  type: actions.SET_ID_CURRENT_RECIPE,
  id,
});
