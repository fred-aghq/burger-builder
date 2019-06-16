import React from 'react';
import Layout from '../Layout/Layout';
import './App.css';
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <BurgerBuilder />
                </Layout>
            </div>
        );
    }
}

export default App;
