// import React from 'react';
// import { StrictMode } from 'react'

// import { createRoot } from 'react-dom/client'
// import ReactDOM from "react-dom/client";

// import './index.css'
// import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// // import Header from './component/Header.jsx';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//         <App />
//     {/* <Header /> */}
//   </React.StrictMode>
// );



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )















import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';  // <-- import this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
