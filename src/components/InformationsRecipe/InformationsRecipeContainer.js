import { connect } from "react-redux";
import InformationsRecipe from "./InformationsRecipe";

const mapStateToProps = (state) => ({
  idRecipe: state.recipe.id_current_recipe,
});

export default connect(mapStateToProps, null)(InformationsRecipe);
