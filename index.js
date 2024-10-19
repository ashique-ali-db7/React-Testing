import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import App from './src/app';


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Correct way to create root in React 18

root.render(<App />); // Use the new render method