import React, {Component} from 'react';
import './App.css';
import Form from './components/Form.js'

class App extends Component{
  getRecipe = (event) => {
      event.preventDefault();
      const recipeName = event.target.elements.recipe.value;
      console.log("getRecipe......", recipeName);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className = "App-title">Recipe-app</h1>
        </header>

        <Form getRecipe = {this.getRecipe}/>
      </div>
    );
  }
}

export default App;
