import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import Checkout from '../Checkout/Checkout';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder />
                    <Checkout />
                </Layout>
            </div>
        );
    }
}

export default App;
