import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {

        state = {
            error: null
        };

        constructor(props) {
            super(props);

            axios.interceptors.request.use(req => {
                this.clearError();
                return req;
            });

            axios.interceptors.response.use(
                res => {
                    return res;
                },
                error => {
                    this.setError(error);
                });
        }

        clearError = () => this.setState({error: null});
        setError = error => this.setState({error: error});

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.clearError}>
                        {this.state.error ? <p>{this.state.error.message}</p> : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
};

export default withErrorHandler;
