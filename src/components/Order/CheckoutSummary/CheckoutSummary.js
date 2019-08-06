import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import CSS from './CheckoutSummary.module.css';
const checkoutSummary = props => {
    return (
        <div className={CSS.CheckoutSummary}>
            <h1>Go get that burger!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger'>CANCEL</Button>
            <Button btnType='Success'>CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;
