import React from 'react';
import SpinnerCSS from './Spinner.module.css';

const spinner = () => (
    <div className={SpinnerCSS.Loader}>
        <div className={SpinnerCSS.Outer}></div>
        <div className={SpinnerCSS.Middle}></div>
        <div className={SpinnerCSS.Inner}></div>
    </div>
);

export default spinner;