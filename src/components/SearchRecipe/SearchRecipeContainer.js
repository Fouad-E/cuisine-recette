import { connect } from "react-redux";
import SearchRecipe from "./SearchRecipe";

import { setIdRecipe } from "../../actions/recipes";

const mapDispatchToProps = (dispatch) => ({
  setIdCurrentRecipe: (id) => dispatch(setIdRecipe(id)),
});

console.log("Container Search recipe called");

export default connect(null, mapDispatchToProps)(SearchRecipe);
