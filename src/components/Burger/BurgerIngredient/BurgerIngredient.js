import React from 'react';
import ingredientCSS from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-top'):
            ingredient = (
                <div className={ingredientCSS.BreadTop}>
                    <div className={ingredientCSS.Seeds1}></div>
                    <div className={ingredientCSS.Seeds2}></div>
                </div>
            );
            break;
        case ('salad'):
            ingredient = <div className={ingredientCSS.Salad}></div>
            break;
        case ('bacon'):
            ingredient = <div className={ingredientCSS.Bacon}></div>
            break;
        case ('cheese'):
            ingredient = <div className={ingredientCSS.Cheese}></div>
            break;
        case ('meat'):
            ingredient = <div className={ingredientCSS.Meat}></div>;
            break;
        case ('bread-bottom'):
            ingredient = <div className={ingredientCSS.BreadBottom}></div>;
            break;
        default:
            ingredient = null;
            break;

    }
    return ingredient;
};

export default burgerIngredient;