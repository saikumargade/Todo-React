import React from 'react';

export default function Input(props) {
        return(
            <React.Fragment>
                <input id="list" onChange={props.handleChange}></input>
                <button onClick={props.addTodo}>ADD</button>
            </React.Fragment>
        )
}