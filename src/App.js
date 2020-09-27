import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavbarRecipe from "./components/NavbarRecipe";
import SearchRecipe from "./components/SearchRecipe/SearchRecipeContainer";
import InformationRecipe from "./components/InformationsRecipe/InformationsRecipeContainer";
import FavoritesRecipe from "./components/FavoritesRecipe/FavoritesRecipeContainer";

import "./App.css";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarRecipe />
        <Switch>
          <Route exact path="/">
            <SearchRecipe />
          </Route>
          <Route path="/informationsRecipe/:id">
            <InformationRecipe />
          </Route>
          <Route path="/favoritesRecipe">
            <FavoritesRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
