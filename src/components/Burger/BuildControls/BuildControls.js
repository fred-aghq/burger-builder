import React from 'react';
import ControlCSS from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

// @TODO: this shouldn't have to be hard-coded here.
// a context wrapper for burger-related components might be a good way to go.
const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = props => (
    <div className={ControlCSS.BuildControls}>
        <p>Current Price: <strong>£{(props.currentPrice / 100).toFixed(2)}</strong></p>
        {
            controls.map(ctrl => {
                return (
                    <BuildControl
                        key={ctrl.type}
                        label={ctrl.label}
                        added={() => props.addClicked(ctrl.type)}
                        removed={() => props.removeClicked(ctrl.type)}
                        disabled={props.disabledControls[ctrl.type]}
                    />
                )
            })
        }
        <button
            className={ControlCSS.OrderButton}
            disabled={!props.checkoutAllowed}
            onClick={props.orderButtonClicked}
        >
            Order
        </button>
    </div>
);

export default buildControls;