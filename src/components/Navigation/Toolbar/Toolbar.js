import React from 'react';
import ToolbarCSS from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDrawer/Toggle/Toggle';

const toolbar = props => (
    <header className={ToolbarCSS.Toolbar}>
        <Toggle toggle={props.toggleSideDrawer}>Menu</Toggle>
        <div className={[ToolbarCSS.Logo, ToolbarCSS.DesktopOnly].join(' ')}>
            <Logo />
        </div>
        <nav className={ToolbarCSS.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;