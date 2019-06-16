import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const igSummary = Object.keys(props.ingredients)
        .map(k => {
            if (props.ingredients[k] < 1) return null;
            const subTotal = (
                (props.prices[k] * props.ingredients[k])
                / 100
            ).toFixed(2);
            return (
                <li key={k}>
                    <span style={{textTransform: 'capitalize'}}>
                        {k + ' '}
                    </span>
                    <span>
                        x{props.ingredients[k]} (£{subTotal})
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
            <h3>TOTAL: £ {(props.checkoutTotal / 100).toFixed(2)}</h3>
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