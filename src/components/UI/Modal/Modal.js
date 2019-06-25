import React from 'react';
import ModalCSS from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (nextProps.show !== this.props.show)
            || (nextProps.children !== this.props.children);
    }

    render() {
        const classes = [ModalCSS.Modal];
        if (this.props.show) {
            classes.push(ModalCSS.Show)
        }
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.join(' ')}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
