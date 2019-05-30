import React from 'react';
import ControlCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = props => {
    return (
        <div className={ControlCSS.BuildControls}>
            {
                controls.map(ctrl => {
                    return (
                        <BuildControl
                            key={ctrl.type}
                            label={ctrl.label}
                            type={ctrl.type}
                        />
                    )
                })
            }
        </div>
    );
};

export default buildControls;