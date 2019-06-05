import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    lettuce: 10,
    cheese: 40,
    meat: 130,
    bacon: 70
};

const BASE_PRICE = 200;
const BASE_INGREDIENT_STATE = {
    lettuce: 0,
    cheese: 0,
    bacon: 0,
    meat: 0
};

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: BASE_INGREDIENT_STATE,
            totalPrice: BASE_PRICE,
            checkoutAllowed: false,
            purchasing: false
        };
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updateCheckoutState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updateCheckoutState(updatedIngredients);
    };

    updateCheckoutState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(k => {
                return ingredients[k];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({
            checkoutAllowed: sum > 0
        });
    }

    resetIngredientsHandler = () => {
        const ig = {
            ...this.state.ingredients
        };

        Object.keys(ig)
            .forEach(k => {
                ig[k] = 0;
            });

        this.setState({
            ingredients: ig,
            totalPrice: BASE_PRICE
        });

        this.updateCheckoutState(ig)
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        })
    };

    purchaseContinueHandler = () => {
        alert('Order Complete.');
    };

    render() {
        const disabled = {
            ...this.state.ingredients
        };
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        prices={INGREDIENT_PRICES}
                        checkoutTotal={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                {/* @TODO: move this to BuildControls: */}
                <button onClick={this.resetIngredientsHandler}>Reset</button>
                <BuildControls
                    addClicked={this.addIngredientHandler}
                    removeClicked={this.removeIngredientHandler}
                    disabledControls={disabled}
                    currentPrice={this.state.totalPrice}
                    checkoutAllowed={this.state.checkoutAllowed}
                    orderButtonClicked={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;