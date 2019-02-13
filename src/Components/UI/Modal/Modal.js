import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <div>
        <Backdrop show={props.show} cancel={props.cancel}/>
        <div className={"Modal" + (props.show ? ' Modal-show' : '')}>
            <div className="modal-header">
                {props.title}
                <button type="button" className="close">
                    <span onClick={() => props.closed()}>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
        </div>
    </div>
);

export default Modal;
