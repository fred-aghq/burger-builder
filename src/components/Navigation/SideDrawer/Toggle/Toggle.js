import React from 'react';
import ToggleCSS from './Toggle.module.css';

const toggle = props => (
    <div className={ToggleCSS.Toggle} onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default toggle;