import { connect } from "react-redux";

import { setIdRecipe } from "../../actions/recipes";
import FavoritesRecipe from "./FavoritesRecipe";

const mapDispatchToProps = (dispatch) => ({
  setIdCurrentRecipe: (id) => dispatch(setIdRecipe(id)),
});

export default connect(null, mapDispatchToProps)(FavoritesRecipe);
