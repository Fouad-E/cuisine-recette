import React, { Component } from "react";

import {
  Button,
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import SimilarRecipe from "../SimilarRecipe";
import getInformationsRecipe from "../../api/getInformationsRecipe";
import getSimilarRecipe from "../../api/getSimilarRecipe";

import "./informationsRecipe.css";

export default class InformationsRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeId:"",
      recipeTitle:"",
      recipeImage:"",
      informationsRecipe: [],
      ingredientsRecipe: [],
      dataSimilarRecipe: [],
      isInFavoritesRecipe:false,
    };

    this.addRecipeOnFavoritesList = this.addRecipeOnFavoritesList.bind(this);
  }

  async componentDidMount() {
    // Get informations and similar recipe
    const resInformationsRecipe = await getInformationsRecipe(
      this.props.idRecipe
    );
    const resDataSimilarRecipe = await getSimilarRecipe(this.props.idRecipe);


    // Set informations, similar and ingredients recipesstate
    this.setState({ informationsRecipe: resInformationsRecipe });
    console.log("Informations recipe : ", resInformationsRecipe);
    this.setState({
      ingredientsRecipe: resInformationsRecipe.extendedIngredients,
    });
    this.setState({ dataSimilarRecipe: resDataSimilarRecipe });
    console.log("Similar recipe : ", resDataSimilarRecipe);

    console.log(
      "Informations recipe : ",
      resInformationsRecipe.extendedIngredients
    );

    // Set informations recipe state for saving this recipe
    const {informationsRecipe} = this.state;
    this.setState({recipeId: informationsRecipe.id});
    this.setState({recipeTitle: informationsRecipe.title});
    this.setState({recipeImage: informationsRecipe.image});

    // Verify if this recipe is in Favorites Recipe list. If yes, show button "save this recipe", else display message "recipe saved"
    
    const favoritesRecipes = JSON.parse(localStorage.getItem("FavoritesRecipes"));
    if(favoritesRecipes!=null){
      for(var i in favoritesRecipes){
        if(favoritesRecipes[i].id===this.props.idRecipe){
            console.log("Compare ==> ", favoritesRecipes[i]+ " == " + this.state.informationsRecipe.id);
            this.setState({isInFavoritesRecipe : true})
        }
      }
    }

  }

  addRecipeOnFavoritesList(){
    const favoritesRecipes = JSON.parse(localStorage.getItem("FavoritesRecipes"));
    console.log("Localstorage favorites recipes initial : ", favoritesRecipes);

    const {recipeId, recipeTitle, recipeImage} = this.state;
    const itemRecipe = {"id": recipeId, "titleRecipe": recipeTitle, "imageUrl": recipeImage};
    if(favoritesRecipes.includes(itemRecipe)===false){
      favoritesRecipes[favoritesRecipes.length] = itemRecipe;
    }
    localStorage.setItem("FavoritesRecipes", JSON.stringify(favoritesRecipes));
    

    console.log("Localstorage favorites recipes final : ", favoritesRecipes);

  }

  render() {
    const {
      dataSimilarRecipe,
      informationsRecipe,
      ingredientsRecipe,
    } = this.state;
    console.log(this.props);
    console.log("vegeratian : ", informationsRecipe.healthScore);

    return (
      <div id="informationsRecipe">
        <Card id="ingredientsRecipe">
          <CardImg
            top
            width="20%"
            src={informationsRecipe.image}
            alt={informationsRecipe.title}
          />      

          <Button id="button-SaveRecipe" color="primary" onClick={this.addRecipeOnFavoritesList}>Save this recipe</Button>

          <CardBody>
            <CardTitle>{ingredientsRecipe.title}</CardTitle>
            <CardSubtitle>
              <strong> Part of Person(s) : </strong> {informationsRecipe.servings}
            </CardSubtitle>
            <CardSubtitle>
              <strong> Time (minutes) : </strong> {informationsRecipe.readyInMinutes}
            </CardSubtitle>
            - <strong> Ingredients </strong>
            <CardText>
              {ingredientsRecipe.map((ingredient) => (
                <li> {ingredient.originalString} </li>
              ))}
            </CardText>
          </CardBody>
        </Card>
        <SimilarRecipe dataSimilarRecipe={dataSimilarRecipe} />
      </div>
    );
  }
}


// {this.state.isInFavoritesRecipe ? <Button id="button-SaveRecipe" color="primary" onClick={this.addRecipeOnFavoritesList}>Save this recipe</Button> : <span> This recipe is saved </span> }