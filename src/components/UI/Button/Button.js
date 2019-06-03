import React from 'react';
import ButtonCSS from './Button.module.css';

const button = props => {
    const btnClasses = [ButtonCSS.Button];

    switch (props.btnType) {
        case 'success':
            btnClasses.push(ButtonCSS.Success);
            break;
        case 'danger':
            btnClasses.push(ButtonCSS.Danger);
            break;
        default:
            break;
    }

    return (
        <button
            className={btnClasses.join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )
};

export default button;