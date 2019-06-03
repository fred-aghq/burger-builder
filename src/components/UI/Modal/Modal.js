import React from 'react';
import ModalCSS from './Modal.module.css';

const modal = props => {
    const classes = [ModalCSS.Modal];
    if (props.show) {
        classes.push(ModalCSS.Show)
    }
    return (<div className={classes.join(' ')}>
        {props.children}
    </div>);
};

export default modal;