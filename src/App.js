
import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Zain', age: 21},
      {name: 'Aq', age: 26},
      {name: 'Hasnain', age: 19}
    ]
  }
  switchNameHandler = (data) => {
    console.log(data);
    this.setState({
      persons: [
        {name: 'Umer', age: 21},
        {name: 'Aq', age: 26},
        {name: 'Zain', age: 19}

      ]
    });
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.switchNameHandler('Umer')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age="20" />
        <Person name={this.state.persons[1].name} age="26">Hobby: Travelling</Person>
        <Person name={this.state.persons[2].name} age="19" />
      </div>
    );
  }
}

export default App;
