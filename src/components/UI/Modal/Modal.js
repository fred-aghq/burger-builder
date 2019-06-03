import React from 'react';
import ModalCSS from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = props => {
    const classes = [ModalCSS.Modal];
    if (props.show) {
        classes.push(ModalCSS.Show)
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.join(' ')}>
            {props.children}
        </div>
        </Aux>
    );
};

export default modal;
