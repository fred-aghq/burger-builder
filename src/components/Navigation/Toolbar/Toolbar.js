import React from 'react';
import ToolbarCSS from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={ToolbarCSS.Toolbar}>
        <div>MenuBtn</div>
        <div className={ToolbarCSS.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;