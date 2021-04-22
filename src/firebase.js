import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpBM5R4rwGzgM0BNUvdYxS4fpYpKJxt2U",
    authDomain: "app-vue2-28dd1.firebaseapp.com",
    projectId: "app-vue2-28dd1",
    storageBucket: "app-vue2-28dd1.appspot.com",
    messagingSenderId: "14583122136",
    appId: "1:14583122136:web:ad99de7579d7cc1b456fad"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()


  export {db}