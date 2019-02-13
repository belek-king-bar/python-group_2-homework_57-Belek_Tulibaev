import React from 'react';
import Button from '../Button/Button.js';

function ButtonRow(props) {
    return <div>
        {props.buttons.map((button, id) =>
            <Button {...button} key={id}/>
        )}</div>
}


export default ButtonRow;