import React from 'react';
import ControlCSS from './BuildControl.module.css';

const buildControl = props => (
    <div className={ControlCSS.BuildControl}>
        <div className={ControlCSS.Label}>{props.label}</div>
        <button
            onClick={props.removed}
            className={ControlCSS.Less}> -
        </button>
        <button
            onClick={props.added}
            className={ControlCSS.More}> +
        </button>
    </div>
);

export default buildControl;