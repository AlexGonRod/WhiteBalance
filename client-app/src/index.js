import React from 'react';
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyBhMaNLpWQedpGpSWK5Y9d0_2cgG62QnM4",
    authDomain: "whitebalance-e24bb.firebaseapp.com",
    databaseURL: "https://whitebalance-e24bb.firebaseio.com",
    projectId: "whitebalance-e24bb",
    storageBucket: "whitebalance-e24bb.appspot.com",
    messagingSenderId: "1039175373052"
})


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
