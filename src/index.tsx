import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DOMRoot = document.getElementById('root');

if (DOMRoot) {
    const root = ReactDOM.createRoot(DOMRoot);
    root.render(<App />);
}
