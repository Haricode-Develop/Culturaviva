// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FBBF24',
        },
        secondary: {
            main: '#4B2C20',
        },
        background: {
            default: '#f5f5f5',
        },
        text: {
            primary: '#333',
        },
    },
    typography: {
        fontFamily: ['Open Sans', 'Roboto', 'Poppins', 'sans-serif'].join(','),
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
