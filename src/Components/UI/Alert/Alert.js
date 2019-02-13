import React from "react";
import './Alert.css';

function Alert(props) {
    return <div
        className={"alert " + (props.show ? 'alert-show ' : '') + props.type}>
        {props.children}

        <button type="button" className="close">
            <span onClick={() => props.dismiss()}>&times;</span>
        </button>
    </div>
}

export default Alert;
