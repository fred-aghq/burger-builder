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

// Leaving this here as a reminder of how to use memo for functional components.
// I'm not sure why the children check didn't work
// export default React.memo(modal,
//     (prevProps, nextProps) => {
//         return (nextProps.show === prevProps.show)
//             || (nextProps.children === prevProps.children);
//     }
// );
