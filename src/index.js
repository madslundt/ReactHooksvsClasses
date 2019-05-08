import React from 'react'
import ReactDOM from 'react-dom'

import { CounterClass, CounterHook } from './counter';

import AppClass from './appClass';
import AppHook from './appHook';

const AppCounter = () => (
    <div>
        <h2>Counter with a class</h2>
        <CounterClass />

        <h2>Counter with a hook</h2>
        <CounterHook />
    </div>
);


ReactDOM.render(<AppCounter />, document.getElementById('root'));
// ReactDOM.render(<AppClass />, document.getElementById('root'));
// ReactDOM.render(<AppHook />, document.getElementById('root'));
