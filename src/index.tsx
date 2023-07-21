import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.scss';
import { Provider } from 'react-redux';
import store from './store';

const DOMRoot = document.getElementById('root');

if (DOMRoot) {
    const root = ReactDOM.createRoot(DOMRoot);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
