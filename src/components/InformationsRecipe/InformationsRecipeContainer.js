import { connect } from "react-redux";
import InformationsRecipe from "./InformationsRecipe";

const mapStateToProps = (state) => ({
  idRecipe: state.id_current_recipe,
});

export default connect(mapStateToProps, null)(InformationsRecipe);
