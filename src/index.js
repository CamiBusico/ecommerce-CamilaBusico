import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOSkk342kpha6qM7qJYYpO-SfRmiX9-TY",
  authDomain: "ecommerce-dobleipa.firebaseapp.com",
  projectId: "ecommerce-dobleipa",
  storageBucket: "ecommerce-dobleipa.appspot.com",
  messagingSenderId: "1022744481606",
  appId: "1:1022744481606:web:4fc74990f90130bc305f47"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

