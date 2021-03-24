
import { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Zain', age: 21 },
      { id: 2, name: 'Aq', age: 26 },
      { id: 3, name: 'Hasnain', age: 19 }
    ],
    showPersons: false
  }


  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }


  render() {
    const style = {
      backgroundColor: 'red',
      color: 'white',
      ':hover': {
        backgroundColor: 'blue'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {
            this.state.showPersons ?
              <div>
                {this.state.persons.map((person, index) => {
                  return <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
                })}
              </div>
              : <h1>No persons to show</h1>
          }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
