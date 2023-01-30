
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC4K1NDgE7UEYlbvE9KkXtewTkgTzzhp9s",
  authDomain: "piechart-3c370.firebaseapp.com",
  projectId: "piechart-3c370",
  storageBucket: "piechart-3c370.appspot.com",
  messagingSenderId: "256909260657",
  appId: "1:256909260657:web:1d3ff8f0e8c15b1c83e8d0",
  measurementId: "G-EQBSRD7DP5"
};

const app = initializeApp(firebaseConfig);

 const db= getFirestore(app);

 const auth=getAuth();

 export {app,db,auth};


