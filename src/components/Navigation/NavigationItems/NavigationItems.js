import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import NavItemCSS from './NavigationItems.module.css';

const navigationItems = props => (
    <ul className={NavItemCSS.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;