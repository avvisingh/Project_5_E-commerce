import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdO7xMS8akS8Dusk00itYIeA9cL1CeqQ0",
    authDomain: "e-commerce-project-568d2.firebaseapp.com",
    projectId: "e-commerce-project-568d2",
    storageBucket: "e-commerce-project-568d2.appspot.com",
    messagingSenderId: "751172517879",
    appId: "1:751172517879:web:4230e4fa3469bc0d6678f2",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export default firestore;
