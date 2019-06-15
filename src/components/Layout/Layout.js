import React from 'react';
import Aux from '../../hoc/Aux';
import ContentClass from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends React.Component {
    state = {
        showDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showDrawer: false });
    };

    sideDrawerOpenedHandler = () => {
        this.setState({ showDrawer: true })
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => (
            { showDrawer: !prevState.showDrawer}
        ))
    };

    render () {
        return (
            <Aux>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={ContentClass.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;