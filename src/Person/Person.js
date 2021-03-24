import React from 'react';
import './Person.css';
import Radium from 'radium'
const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }
    return (<div className="Person" style={style}>
        <h4 onClick={props.click} style={{backgroundColor: 'orange'}}>I am {props.name} and I am {props.age} years old!</h4>
        <input type="text" onChange={props.changed} />
        <p>{props.children}</p>
    </div>)

}

export default Radium(person);