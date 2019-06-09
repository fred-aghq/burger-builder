import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerCSS from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = props => {
    const drawerClasses = [SideDrawerCSS.SideDrawer];
    drawerClasses.push(
        props.open ? SideDrawerCSS.Open : SideDrawerCSS.Close
    );
    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed}
            />
            <div className={drawerClasses.join(' ')}>
            <div className={SideDrawerCSS.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;