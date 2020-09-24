import actions from "../actions/constants";

const initialState = {
  id_current_recipe: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ID_CURRENT_RECIPE:
      console.log("Action  : ", action);

      console.log("Type action received : ", action.type);
      console.log("Id current recipe received : ", action.id);

      return {
        ...state,
        id_current_recipe: action.id,
      };

    default:
      return state;
  }
};
