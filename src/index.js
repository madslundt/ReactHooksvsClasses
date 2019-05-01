import React from 'react'
import ReactDOM from 'react-dom'

import { CounterClass, CounterHook } from './counter';

// import AppPage from './appClass';
// import AppPage from './appHook';

const App = () => (
    <div>
        <h2>Counter class</h2>
        <CounterClass />

        <h2>Counter hook</h2>
        <CounterHook />
        {/* <AppPage /> */}
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
