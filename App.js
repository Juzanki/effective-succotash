// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import React, { useEffect } from 'react';

const firebaseConfig = {
  apiKey: AIzaSyAIcmPmopx96jIODfndP5MdnjJXtgw3MLs
  authDomain: juzanki-2cf11.firebaseapp.com
  projectId: juzanki-2cf11
  storageBucket: juzanki-2cf11
  messagingSenderId: 366709184884
  appId: 1:366709184884:web:2a85452e3bb0f3c1d6b421
  measurementId: "G-3XZQLGGJ80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  useEffect(() => {
    // You can use Firebase services here
  }, []);

  return (
    // Your app UI components go here
    <div>
      <h1>Juzanki App</h1>
      {/* Add more components as needed */}
    </div>
  );
};

export default App;
