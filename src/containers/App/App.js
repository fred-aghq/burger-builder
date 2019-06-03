import React from 'react';
import Layout from '../../components/Layout/Layout';
import './App.css';
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Toolbar />
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
