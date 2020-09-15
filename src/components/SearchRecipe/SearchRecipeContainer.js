import { connect } from "react-redux";
import SearchRecipe from "SearchRecipe";
import { bindActionCreators } from "redux";

import setIdRecipe from "../../actions/recipes";

const mapActionToProps = (dispatch) => ({
  setIdCurrentRecipe: (id) => dispatch(setIdRecipe(id)),
});

export default connect(null, mapActionToProps)(SearchRecipe);
