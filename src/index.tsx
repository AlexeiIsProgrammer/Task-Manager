import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.scss';

const DOMRoot = document.getElementById('root');

if (DOMRoot) {
    const root = ReactDOM.createRoot(DOMRoot);
    root.render(<App />);
}
