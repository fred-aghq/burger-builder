import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

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
            ingredients: null,
            totalPrice: BASE_PRICE,
            checkoutAllowed: false,
            purchasing: false,
            loading: false
        };
    }

    componentDidMount() {
        this.setState({loading:true});

        axios.get('/config.json')
            .then(res => {
                const startWith = !res.data.startWithIngredients
                    ? BASE_INGREDIENT_STATE
                    : res.data.startWithIngredients;

                const basePrice = !res.data.basePrice
                    ? BASE_PRICE
                    : res.data.basePrice;

                this.setState({
                    ingredients: startWith,
                    basePrice: basePrice,
                    loading: false,
                    checkoutAllowed: !Object.values(startWith)
                        .every(v => !!v)
                });
            })
            .catch( err => {
                this.setState({
                    loading: false,
                    checkoutAllowed: false,
                    ingredients: BASE_INGREDIENT_STATE,
                    basePrice: BASE_PRICE,
                })
            });
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
        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Fred Spooner',
                address: {
                    line1: '123',
                    line2: 'Fake Street',
                    zipCode: '90210'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios
            .post('/orders.json', order)
            .then(res => {
                console.log(res);
                this.setState({loading: false, purchasing: false})
            })
            .catch(err => {
                console.log(err);
                this.setState({loading: false, purchasing: false});
            });
    };

    render() {
        const disabled = {
            ...this.state.ingredients
        };
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }

        let orderSummary = null;

        let burger = <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger
                        ingredients={this.state.ingredients}
                    />
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


            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    prices={INGREDIENT_PRICES}
                    checkoutTotal={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
            );

            if (this.state.loading) {
                orderSummary = <Spinner/>
            }
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);