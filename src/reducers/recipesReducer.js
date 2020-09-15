import actions from "../actions/constants";

const defaultState = {
  id_current_recipe: 0,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SET_ID_CURRENT_RECIPE:
      console.log("Id current recipe modified", action.id);
      return [
        ...state,
        {
          id_current_recipe: action.id,
        },
      ];

    default:
      return state;
  }
};
