import React from 'react';
import './Person.css';
const person = (props) => {
    return (<div className="Person">
        <h4 onClick={props.click} style={{backgroundColor: 'orange'}}>I am {props.name} and I am {props.age} years old!</h4>
        <input type="text" onChange={props.changed} />
        <p>{props.children}</p>
    </div>)

}

export default person;