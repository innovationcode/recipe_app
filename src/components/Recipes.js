import React from 'react';

const Recipes = (props) => (
    <div className = "container">            
        <div className = "row">

            {props.recipes.map((recipe, index) => {
                return (
                    <div className = ".col-xs-4" key = {index}>
                        <div className = "recipe-box" style = {{
                                                                    height: "auto",
                                                                    width: "300px",
                                                                    marginBottom: "2rem"
                                                               }}>
                            <h3> {recipe.recipe.label}</h3>
                            <img src = {recipe.recipe.image}/>
                            <p><a href = {recipe.recipe.url} target = "_blank">Link to recipe</a></p>
                            {/* <p>Publisher : {}</p> */}
                        </div>
                    </div>
                )
            })}

        </div>
    </div>
);

export default Recipes; 

