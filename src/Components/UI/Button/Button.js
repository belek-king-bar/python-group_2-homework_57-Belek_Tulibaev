import React from "react";
import './Button.css';

function Button(props) {
    return <button
        type='button'
        className={'mr-2 btn btn-' + props.type}
        onClick={() => props.clicked()}>
        {props.label}
    </button>
}

export default Button;
