import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const igSummary = Object.keys(props.ingredients)
        .map(k => {
            return (
                <li key={k}>
                    <span style={{textTransform: 'capitalize'}}>
                        {k + ' '}
                    </span>
                    <span>
                        x{props.ingredients[k]}
                    </span>
                </li>
            );
        });

    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>Your custom burger contains:</p>
            <ul>
                {igSummary}
            </ul>
            <Button btnType='danger' clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType='success' clicked={props.purchaseContinued}>
                Continue
            </Button>
        </Aux>
    );
};

export default orderSummary;