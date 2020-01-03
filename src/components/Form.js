import React from 'react';

const Form = (props) => (
    <form onSubmit = {props.getRecipe} style = {{marginBottom : "2rem"}}>
        <input className = "form-input" type = "text" name = "recipe"/>
        <button className = "recipe-btn">Search</button>
    </form>
);

export default Form;