import React from 'react';
import ControlCSS from './BuildControl.module.css';

const buildControl = props => (
    <div className={ControlCSS.BuildControl}>
        <div className={ControlCSS.Label}>{props.label}</div>
        <button className={ControlCSS.Less}> - </button>
        <button className={ControlCSS.More}> + </button>
    </div>
);

export default buildControl;