import React from 'react';
import NavItemCSS from './NavigationItem.module.css';

const navigationItem = props => (
    <li className={NavItemCSS.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? NavItemCSS.active : null}
        >
            {props.children}
        </a>
    </li>
);

export default navigationItem;