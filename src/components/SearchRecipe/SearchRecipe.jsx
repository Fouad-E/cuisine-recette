import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import getComplexRecipe from "../../api/getComplexRecipe";

class SearcRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchWord: "",
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleSetIdCurrentRecipe = this.handleSetIdCurrentRecipe.bind(this);
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

  handleSetIdCurrentRecipe = (e) => {
    console.log("PROPS : ", this.props);
    console.log("ID : ", e.target.alt);

    const { setIdCurrentRecipe } = this.props;
    setIdCurrentRecipe(e.target.alt);
  };

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

        {data.map((recipe) => (
          <div>
            <Link to="/recipeInformation">
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
          </div>
        ))}
      </div>
    );
  }
}

SearcRecipe.propTypes = {
  setIdCurrentRecipe: PropTypes.func.isRequired,
};

export default SearcRecipe;
