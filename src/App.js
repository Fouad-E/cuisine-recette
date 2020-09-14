import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchRecipe from "./components/SearchRecipe";
import SimilarRecipe from "./components/SimilarRecipe";

import "./App.css";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchRecipe />
          </Route>
          <Route path="/recipeInformation">
            <SimilarRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
