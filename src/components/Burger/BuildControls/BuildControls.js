import React from 'react';
import ControlCSS from './BuildControls.module.css';

const buildControls = props => {
    return (
        <div className={ControlCSS.BuildControls}>
            <p>Build Controls</p>
        </div>
    );
};

export default buildControls;