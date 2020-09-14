import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import getComplexRecipe from "../../api/getComplexRecipe";

export default class SearcRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchWord: "",
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(e) {
    this.setState({ searchWord: e.target.value });
    console.log("Search word : ", this.state.searchWord);
  }

  async onSubmit() {
    const resultSearchRecette = await getComplexRecipe(this.state.searchWord);
    console.log("API RECU :", resultSearchRecette);

    this.setState({ data: resultSearchRecette });
    console.log("Data :", this.state.data);

    console.log("Cliqué !");
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="recipe"> Recipe</Label>
            <Input type="text" onChange={this.onHandleChange} />
          </FormGroup>
          <Button onClick={this.onSubmit}>Search</Button>
        </Form>

        {data.map((recipe, index) => (
          <div>
            <Link to="/recipeInformation">
              <img class="fit-picture" src={recipe.image} alt={recipe.title} />
              <li key={recipe.id}>{recipe.title}</li>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
