import { keyPressListener } from './keyPressListener.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const gameContainer = document.getElementById('game-container');

const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', () => {
    loadingScreen.style.display = 'none';
});

const firebaseConfig = {
    apiKey: "AIzaSyADh0UBi2GcSS6ipT3sWONadMoWi-DbScQ",
    authDomain: "aoshima-pov.firebaseapp.com",
    projectId: "aoshima-pov",
    storageBucket: "aoshima-pov.firebasestorage.app",
    messagingSenderId: "791761226138",
    appId: "1:791761226138:web:f3102176a595a2b2b45223",
    measurementId: "G-ZV9Y7LX0RS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const analytics = getAnalytics(app);
