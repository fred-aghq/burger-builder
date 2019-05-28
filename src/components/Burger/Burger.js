import React from 'react';
import BurgerCSS from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // Get the keys as an array
    const ingredients = Object.keys(props.ingredients);

    // Map over each key
    const igComponents = ingredients
        .map(igKey => {
            // use the key to retrieve the count from props
            // and create an empty array of length equal to ingredient count
            const mappedArray = [...Array(props.ingredients[igKey])];

            // map the empty array to render the appropriate number of ingredients
            return mappedArray.map(
                (_, i) => {
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                }
            );
        });

    return (
        <div className={BurgerCSS.Burger}>
            <BurgerIngredient type="bread-top"/>
            {igComponents}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;