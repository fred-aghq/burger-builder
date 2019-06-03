import React from 'react';
import ToolbarCSS from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = props => (
    <header className={ToolbarCSS.Toolbar}>
        <div>MenuBtn</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;