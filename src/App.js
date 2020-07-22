import React, { Component } from 'react';
import Table from './Table.js';
import Form from './Form';

class App extends Component {
  state = {//The state object is where you store property values that belongs to the component.
    characters: [],
  };
  //method to remove enterd data on page
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({//use this.setState to modify an array.
      //filter method can create a new array and put elements  that passed a condition into the array
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }
  //this will update the state by taking the existing this.state.characters and adding the new character parameter
  //... Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places
  // where zero or more arguments (for function calls) or elements (for array literals) are expected,
  // or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. 
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  //method
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );

  }


}

export default App;