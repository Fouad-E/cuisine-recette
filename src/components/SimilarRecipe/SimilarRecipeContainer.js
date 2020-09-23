import { connect } from "react-redux";
import SimilarRecipe from "./SimilarRecipe";

const mapStateToProps = (state) => ({
  idRecipe: state.recipe.id_current_recipe,
});

export default connect(mapStateToProps, null)(SimilarRecipe);
