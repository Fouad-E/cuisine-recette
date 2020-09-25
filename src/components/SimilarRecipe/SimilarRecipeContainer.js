import { connect } from "react-redux";

import SimilarRecipe from "./SimilarRecipe";
import { setIdRecipe } from "../../actions/recipes";

const mapStateToProps = (state) => ({
  idRecipe: state.recipe.id_current_recipe,
});

const mapDispatchToProps = (dispatch) => ({
  setIdCurrentRecipe: (id) => dispatch(setIdRecipe(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimilarRecipe);
