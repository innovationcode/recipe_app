import React from 'react';

import { Link } from "react-router-dom";

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async() => {
        //console.log(this.props.location.state)
        const recipeName = this.props.location.state.recipe;
        //console.log("recipeName   :   " ,recipeName)
        // fetch("https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30&calories=591-722&health=alcohol-free",{mode: 'no-cors'})
        //     .then(response => {
        //         console.log("response   : ",response),
        //         response.json()
        //     })
        //     .then(jsondata => console.log(jsondata))
        const API_CALL = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`,)
        console.log("*************",API_CALL)
        const data = await API_CALL.json();
        if(data.hits.length > 0) {
            console.log("Recipe  :   ", data.hits[0]); //array return 
            this.setState({
                activeRecipe : data.hits[0].recipe,
            })
        // //} else {
        // //     alert("NO page Found for this recipe..");
        }
  }
  
  render() {
    const activeRecipe = this.state.activeRecipe;
    
    return (
        <div className="container">
            { this.state.activeRecipe.length !== 0 &&
                <div className = "active-recipe">
                    <img className = "active-recipe-img" src = {activeRecipe.image} alt = "recipe_image"/>
                    <h2 style = {{color:"red",paddingBottom: "1rem"}}>{activeRecipe.label}</h2>
                    <h5>Publisher &nbsp; : &nbsp; {activeRecipe.source}</h5>
                    <h5>Website &nbsp; &nbsp; : &nbsp; <a href = {activeRecipe.url}>{activeRecipe.url}</a></h5>
                    <p><button className = "recipe-btn" style = {{marginTop: "15px", marginLeft:"0px"}}>
                        <Link to="/">Go Home</Link>
                    </button></p>
                </div>
            }
        </div>
    ); 
  }
};

export default Recipe;