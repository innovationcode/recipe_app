import React from 'react';

const Recipes = (props) => (
    <div>
        {props.recipes.map((recipe) => {
            return (
                      <div key = {recipe.recipe.label}>
                          <h3> {recipe.recipe.label}</h3>
                          <img src = {recipe.recipe.image}/>
                          <p><a href = {recipe.recipe.url} target = "_blank">Link to recipe</a></p>
                      </div>
                    )
        })}
    </div>
);

export default Recipes; 

