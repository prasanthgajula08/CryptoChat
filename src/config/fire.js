import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9ABXrkSRefZuuL50asLJROxM9w_CVtEA",
  authDomain: "cryptochat-13e9f.firebaseapp.com",
  projectId: "cryptochat-13e9f",
  storageBucket: "cryptochat-13e9f.appspot.com",
  messagingSenderId: "302628458600",
  appId: "1:302628458600:web:f5298b4d337be8bea22bdd",
  measurementId: "G-GRHFBK9L0L"
};

const fire = initializeApp(firebaseConfig);
export default fire;