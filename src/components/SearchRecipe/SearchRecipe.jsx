import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";

import getComplexRecipe from "../../api/getComplexRecipe";

class SearcRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchWord: "",
      diet: "all",
      type: "all",
      maxFat: "",
    };
    this.onHandleChangeSearchRecipe = this.onHandleChangeSearchRecipe.bind(
      this
    );
    this.onHandleChangeDiet = this.onHandleChangeDiet.bind(this);
    this.onHandleChangeType = this.onHandleChangeType.bind(this);
    this.onHandleChangeMaxFat = this.onHandleChangeMaxFat.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.handleSetIdCurrentRecipe = this.handleSetIdCurrentRecipe.bind(this);
  }

  onHandleChangeSearchRecipe(e) {
    this.setState({ searchWord: e.target.value });
    console.log("Search word : ", this.state.searchWord);
  }

  onHandleChangeDiet(e) {
    this.setState({ diet: e.target.value });
    console.log("Diet : ", this.state.diet);
  }

  onHandleChangeType(e) {
    this.setState({ type: e.target.value });
    console.log("Type : ", this.state.type);
  }

  onHandleChangeMaxFat(e) {
    this.setState({ maxFat: e.target.value });
    console.log("Max Fat : ", this.state.maxFat);
  }

  async onSubmit() {
    const { searchWord, diet, type, maxFat } = this.state;
    const resultSearchRecette = await getComplexRecipe(
      searchWord,
      diet,
      type,
      maxFat
    );
    console.log("API RECU :", resultSearchRecette);

    this.setState({ data: resultSearchRecette });
    console.log("Data :", this.state.data);
    console.log("Cliqué !");
  }

  handleSetIdCurrentRecipe = (e) => {
    console.log("PROPS : ", this.props);
    console.log("ID : ", e.target.alt);

    const { setIdCurrentRecipe } = this.props;
    setIdCurrentRecipe(e.target.alt);
  };

  render() {
    const { data } = this.state;
    const { idCurrent } = this.props;
    return (
      <div>
        <span> idCurrent : {idCurrent} </span>
        <Form>
          <FormGroup>
            <Label for="recipe"> Recipe : </Label>
            <Input type="text" onChange={this.onHandleChangeSearchRecipe} />
            <br />
            <label for="diets">Choose a diet : </label>
            <select id="diets" name="diets" onChange={this.onHandleChangeDiet}>
              <option value="All">All</option>
              <option value="glutenFree">Gluten Free</option>
              <option value="vetogenic">Vetogenic</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescetarian">Pescetarian</option>
            </select>
            <br />

            <label for="type">Choose a type of meals : </label>
            <select id="types" name="types" onChange={this.onHandleChangeType}>
              <option value="all">All</option>
              <option value="breakfast">Breakfast</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
              <option value="snack">Snack</option>
              <option value="sauce">Sauce</option>
              <option value="soupe">Soupe</option>
              <option value="salad">Salad</option>
              <option value="pescetarian">Pescetarian</option>
            </select>
            <br />
            <Label for="recipe">Max fat : </Label>
            <Input type="text" onChange={this.onHandleChangeMaxFat} />
          </FormGroup>

          <Button onClick={this.onSubmit}>Search</Button>
        </Form>

        {data.map((recipe) => (
          <Card>
            <Link to={"/informationsRecipe/" + recipe.id}>
              <CardImg
                top
                src={recipe.image}
                alt={recipe.id}
                onClick={this.handleSetIdCurrentRecipe}
              />
            </Link>
            <CardBody>
              <CardTitle>{recipe.title}</CardTitle>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

SearcRecipe.propTypes = {
  idCurrent: PropTypes.number.isRequired,
  setIdCurrentRecipe: PropTypes.func.isRequired,
};

export default SearcRecipe;

/* 
<Link to={"/informationsRecipe/" + recipe.id}>
              <img
                class="fit-picture"
                src={recipe.image}
                title={recipe.title}
                alt={recipe.id}
                onClick={this.handleSetIdCurrentRecipe}
              />

              <li key={recipe.id} onClick={this.handleSetIdCurrentRecipe}>
                {recipe.title}
              </li>
            </Link>

*/
