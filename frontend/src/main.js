import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './assets/main.css'
// import firebase from "firebase/compat";
import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCq8Rwm5s_T0SOI3hE9fZKu70y95WJcIQ0",
    authDomain: "project-tourist-b00ee.firebaseapp.com",
    projectId: "project-tourist-b00ee",
    storageBucket: "project-tourist-b00ee.appspot.com",
    messagingSenderId: "720379632658",
    appId: "1:720379632658:web:e9ad920bc9f84e1d6a4ccb",
};

firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");