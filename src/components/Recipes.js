import React from 'react';

const Recipes = (props) => (
    <div className = "container">            
        <div className = "row">

            {props.recipes.map((recipe, index) => {
                return (
                    <div className = "col-md-4" key = {index}>
                        <div className = "recipes-box" >
                            <img className = "recipe-img" src = {recipe.recipe.image} alt =  {recipe.recipe.label}/>
                            <h4  style= {{fontSize: "22px", padding : "20px 5px", fontWeight: "bold"}}> {recipe.recipe.label.length < 20 ? `${recipe.recipe.label}` : `${recipe.recipe.label.substring(0, 25)}...` }</h4>                         
                            <button className = "recipe-btn"><a href = {recipe.recipe.url} target = "_blank">View &nbsp; Recipe</a></button>
                        </div>
                    </div>
                )
            })}

        </div>
    </div>
);

export default Recipes; 

