import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchRecipe from "./components/SearchRecipe/SearchRecipeContainer";
import InformationRecipe from "./components/InformationsRecipe/InformationsRecipeContainer";

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
          <Route path="/informationsRecipe/:id">
            <InformationRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
