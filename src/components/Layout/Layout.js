import React from 'react';
import Aux from '../../hoc/Aux';
import ContentClass from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer</div>
        <main className={ContentClass.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;