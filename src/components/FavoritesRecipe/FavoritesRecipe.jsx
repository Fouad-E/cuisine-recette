import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from 'react-icons/ri';

import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
  } from "reactstrap";


import "./FavoritesRecipe.css";

class FavoritesRecipe extends Component{
    constructor(props){
        super(props);
        this.state={
            favoritesRecipes:[],
        }
        this.deleteRecipe = this.deleteRecipe.bind(this);
        this.handleSetIdCurrentRecipe = this.handleSetIdCurrentRecipe.bind(this);

    }


    componentDidMount(){
        const favoritesRecipes = JSON.parse(localStorage.getItem("FavoritesRecipes"));
        this.setState({favoritesRecipes : favoritesRecipes});
    }

    deleteRecipe(id){
        const { favoritesRecipes } = this.state;
        for(var i in favoritesRecipes){
            if(favoritesRecipes[i].id===id){
                favoritesRecipes.splice(i, 1);
            }
        }

        this.setState({favoritesRecipes : favoritesRecipes});
        localStorage.setItem("FavoritesRecipes", JSON.stringify(favoritesRecipes));

    }

    handleSetIdCurrentRecipe = (id) => {
        console.log("PROPS : ", this.props);
        console.log("ID : ", id);
    
        const { setIdCurrentRecipe } = this.props;
        setIdCurrentRecipe(id);
    };

    render(){

        const {favoritesRecipes} = this.state;

        return(
            <div>
                <h1> Favorites Recipe </h1>
                {favoritesRecipes.map((recipe) => (
                    <Card className="catalogueRecipe">
                        <Link to={"/informationsRecipe/" + recipe.id} onClick={ () => this.handleSetIdCurrentRecipe(recipe.id)}>
                            <CardImg
                                top
                                src={recipe.imageUrl}
                                alt={recipe.id}
                            />
                        </Link>
                        <CardBody>
                        <CardTitle>{recipe.titleRecipe}</CardTitle>
                        <button onClick={() => this.deleteRecipe(recipe.id)}> 
                            <RiDeleteBin5Line className="iconDelete" size="2em"/>
                        </button>
                        </CardBody>
                    </Card>
                ))}
            </div>
        );
    }

}

export default FavoritesRecipe;