import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.js'

const API_ID = process.env.REACT_APP_API_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component{
  //In REACT 16 onwords ni need to use constructor, super call and this.state
  state = {
    recipes : [],
  }
 
  getRecipe = async (event) => {
      event.preventDefault();
      const recipeName = event.target.elements.recipe.value;
      const API_CALL = await fetch(`https://api.edamam.com/search?q=paneer&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`);
      const data = await API_CALL.json();

      //console.log("getRecipe......", data.hits);
      this.setState({
        recipes : data.hits,
      })
      console.log("getRecipe......", this.state.recipes);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className = "App-title">Recipe-app</h1>
        </header>

        <Form getRecipe = {this.getRecipe}/>

        {this.state.recipes.map((recipe) => {
            return (<div>
                      <p key = {recipe.recipe.label}> {recipe.recipe.label}</p>
                      <img src = {recipe.recipe.image}/>
                    </div>
                    )
        })}
      </div>
    );
  }
}

export default App;
