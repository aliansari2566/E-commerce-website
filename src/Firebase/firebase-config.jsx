import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "Your API KEY",
  authDomain: "authentication-73e17.firebaseapp.com",
  projectId: "authentication-73e17",
  storageBucket: "authentication-73e17.appspot.com",
  messagingSenderId: "36734240492",
  appId: "1:36734240492:web:9e69554aa89332bad007c9",
  measurementId: "G-ZM5G9CYT4M",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
