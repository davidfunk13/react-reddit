import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createAppStore from './redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor, store } = createAppStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            < BrowserRouter >
                <App />
            </ BrowserRouter >
        </PersistGate>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
