import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoE6YObSJYD-N8mi1CYFjFjoWV4rTqVOU",
  authDomain: "dcard-homework.firebaseapp.com",
  projectId: "dcard-homework",
  storageBucket: "dcard-homework.appspot.com",
  messagingSenderId: "822235578246",
  appId: "1:822235578246:web:0ca9f1ccfe88f16ad77607"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export { app };