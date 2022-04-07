import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDjorSGyraytK06-PeJ_ByiO4BbLHkf6Ms",
  authDomain: "e-rider-app-a7604.firebaseapp.com",
  databaseURL: "https://e-rider-app-a7604-default-rtdb.firebaseio.com",
  projectId: "e-rider-app-a7604",
  storageBucket: "e-rider-app-a7604.appspot.com",
  messagingSenderId: "389980285247",
  appId: "1:389980285247:web:0c5214823441ee431e0b8a"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
