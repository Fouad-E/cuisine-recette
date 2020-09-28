import React, { Component } from "react";
import { GiSaveArrow } from "react-icons/gi";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import SimilarRecipe from "../SimilarRecipe";
import getInformationsRecipe from "../../api/getInformationsRecipe";
import getSimilarRecipe from "../../api/getSimilarRecipe";

import "./informationsRecipe.css";

export default class InformationsRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId: "",
      recipeTitle: "",
      recipeImage: "",
      informationsRecipe: [],
      ingredientsRecipe: [],
      dataSimilarRecipe: [],
      isInFavoritesRecipe: false,
    };

    this.addRecipeOnFavoritesList = this.addRecipeOnFavoritesList.bind(this);
    this.updateInformationsRecipe = this.updateInformationsRecipe.bind(this);
  }

  async componentWillMount() {
    var idRecipe = this.props.idRecipe;
    if (idRecipe === "0") {
      if (localStorage.getItem("idRecipe") != null) {
        idRecipe = localStorage.getItem("idRecipe");
      }
    } else {
      localStorage.setItem("idRecipe", idRecipe);
    }
    // Get informations and similar recipe
    const resInformationsRecipe = await getInformationsRecipe(idRecipe);
    const resDataSimilarRecipe = await getSimilarRecipe(idRecipe);

    // Set informations, similar and ingredients recipesstate
    this.setState({ informationsRecipe: resInformationsRecipe });
    this.setState({
      ingredientsRecipe: resInformationsRecipe.extendedIngredients,
    });
    this.setState({ dataSimilarRecipe: resDataSimilarRecipe });

    // Set informations recipe state for saving this recipe
    const { informationsRecipe } = this.state;
    this.setState({ recipeId: informationsRecipe.id });
    this.setState({ recipeTitle: informationsRecipe.title });
    this.setState({ recipeImage: informationsRecipe.image });

    // Verify if this recipe is in Favorites Recipe list. If yes, show button "save this recipe", else display message "recipe saved"
    const favoritesRecipes = JSON.parse(
      localStorage.getItem("FavoritesRecipes")
    );
    if (favoritesRecipes != null) {
      var findItem = false;
      for (var i in favoritesRecipes) {
        if (favoritesRecipes[i].id === informationsRecipe.id) {
          findItem = true;
          this.setState({ isInFavoritesRecipe: findItem });
        }
      }
    }
  }

  addRecipeOnFavoritesList() {
    const favoritesRecipes = JSON.parse(
      localStorage.getItem("FavoritesRecipes")
    );

    const { recipeId, recipeTitle, recipeImage } = this.state;
    const itemRecipe = {
      id: recipeId,
      titleRecipe: recipeTitle,
      imageUrl: recipeImage,
    };

    // Verify if this recipe is in Favorites Recipe list. If yes, show button "save this recipe", else display message "recipe saved"
    var findItem = false;
    if (favoritesRecipes != null) {
      for (var i in favoritesRecipes) {
        if (favoritesRecipes[i].id === itemRecipe.id) {
          findItem = true;
          this.setState({ isInFavoritesRecipe: findItem });
        }
      }
    }

    if (!findItem) {
      favoritesRecipes[favoritesRecipes.length] = itemRecipe;
      localStorage.setItem(
        "FavoritesRecipes",
        JSON.stringify(favoritesRecipes)
      );
    }
  }

  async updateInformationsRecipe(id) {
    // Update informations recipe after clicking on one of similar recipes
    const { setIdCurrentRecipe } = this.props;
    setIdCurrentRecipe(id);
    this.setState({ isInFavoritesRecipe: false });

    // Get informations and similar recipe
    const resInformationsRecipe = await getInformationsRecipe(id);
    const resDataSimilarRecipe = await getSimilarRecipe(id);

    // Set informations, similar and ingredients recipesstate
    this.setState({ informationsRecipe: resInformationsRecipe });
    this.setState({
      ingredientsRecipe: resInformationsRecipe.extendedIngredients,
    });
    this.setState({ dataSimilarRecipe: resDataSimilarRecipe });

    // Set informations recipe state for saving this recipe
    const { informationsRecipe } = this.state;
    this.setState({ recipeId: informationsRecipe.id });
    this.setState({ recipeTitle: informationsRecipe.title });
    this.setState({ recipeImage: informationsRecipe.image });
  }

  render() {
    const {
      dataSimilarRecipe,
      informationsRecipe,
      ingredientsRecipe,
      isInFavoritesRecipe,
    } = this.state;

    return (
      <div id="informationsRecipe">
        <Card id="ingredientsRecipe">
          <CardImg
            top
            width="20%"
            src={informationsRecipe.image}
            alt={informationsRecipe.title}
          />

          <CardBody>
            <CardTitle>{informationsRecipe.title}</CardTitle>
            {!isInFavoritesRecipe ? (
              <Button
                id="buttonSaveTheRecipe"
                color="primary"
                onClick={this.addRecipeOnFavoritesList}
              >
                Save this recipe <GiSaveArrow />
              </Button>
            ) : (
              <span id="messageRecipeSaved">
                {" "}
                This recipe is saved in favorites recipes{" "}
              </span>
            )}
            <CardSubtitle>
              <strong> Part of Person(s) : </strong>{" "}
              {informationsRecipe.servings}
            </CardSubtitle>
            <CardSubtitle>
              <strong> Time (minutes) : </strong>{" "}
              {informationsRecipe.readyInMinutes}
            </CardSubtitle>
            - <strong> Ingredients </strong>
            <CardText>
              {ingredientsRecipe.map((ingredient) => (
                <li> {ingredient.originalString} </li>
              ))}
            </CardText>
          </CardBody>
        </Card>
        <SimilarRecipe
          dataSimilarRecipe={dataSimilarRecipe}
          updateInformationsRecipe={(id) => this.updateInformationsRecipe(id)}
        />
      </div>
    );
  }
}
