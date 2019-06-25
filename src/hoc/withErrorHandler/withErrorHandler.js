import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        interceptors = {
            request: null,
            response: null
        };

        state = {
            error: null
        };

        constructor(props) {
            super(props);

            this.interceptors.request = axios.interceptors.request.use(req => {
                this.clearError();
                return req;
            });

            this.interceptors.response = axios.interceptors.response.use(
                res => {
                    return res;
                },
                error => {
                    this.setError(error);
                });
        }

        clearError = () => this.setState({error: null});
        setError = error => this.setState({error: error});

        componentWillUnmount() {
            axios.interceptors.request.eject(this.interceptors.request);
            axios.interceptors.response.eject(this.interceptors.response);
        }

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
