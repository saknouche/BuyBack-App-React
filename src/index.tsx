import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { StyledEngineProvider } from '@mui/material';
import {ToastContainer} from "react-toastify";
import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
      <ThemeProvider>
          <StyledEngineProvider injectFirst>
              <BrowserRouter>
                <App />
              </BrowserRouter>
              <ToastContainer toastStyle={{ backgroundColor: "#f0f9f3" }} />
          </StyledEngineProvider>
      </ThemeProvider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
