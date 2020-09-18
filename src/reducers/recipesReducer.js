import actions from "../actions/constants";

const defaultState = {
  id_current_recipe: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_ID_CURRENT_RECIPE:
      console.log("Action  : ", action);

      console.log("Type action  : ", action.type);
      console.log("Id current recipe modified : ", action.idCurrentRecipe);

      return {
        ...state,
        id_current_recipe: action.idCurrentRecipe,
      };

    default:
      return state;
  }
};
