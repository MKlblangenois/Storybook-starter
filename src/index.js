import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';

const App = () => {
    return (
        <div className="App">
        <h1>Hi!</h1>

        <p>You're in a Storybook project, just close this server and run <code>npm run storybook</code> 🚀</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
