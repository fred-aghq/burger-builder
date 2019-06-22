import React from 'react';
import ModalCSS from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
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

export default React.memo(modal,
    (prevProps, nextProps) => {
        return (nextProps.show === prevProps.show)
            || (nextProps.children === prevProps.children);
    }
);
