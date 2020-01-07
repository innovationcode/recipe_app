import React from 'react';

import { Link } from "react-router-dom";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
        //console.log(this.props.location.state)
        const recipeName = this.props.location.state.recipe;
        //console.log("recipeName   :   " ,recipeName)
        const API_CALL = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`);
        const data = await API_CALL.json();
        console.log("Recipe  :   ", data.hits[0]); //array return 
        this.setState({
            activeRecipe : data.hits[0].recipe,
        })
        //console.log("activeRecipe  :  ", this.state.activeRecipe.recipe.image);
  }
  
  render() {
    const activeRecipe = this.state.activeRecipe;
    console.log("active render() ", activeRecipe.image)
    
    return (
        <div className="container">
            <div className = "active-recipe">
                <img className = "active-recipe-img" src = {activeRecipe.image} />

            </div>
        </div>
    );
  }
};

export default Recipe;