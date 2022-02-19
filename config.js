import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDrLn1uuGlQO2n3KqHu4JKkDnaoS5ohbv0",
    authDomain: "e-ride-stage-4-a69fa.firebaseapp.com",
    projectId: "e-ride-stage-4-a69fa",
    storageBucket: "e-ride-stage-4-a69fa.appspot.com",
    messagingSenderId: "193301157152",
    appId: "1:193301157152:web:2977f78c35ea257061f345"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
