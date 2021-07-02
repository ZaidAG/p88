import firebase from 'firebase';
require('@firebase/firestore')


  var firebaseConfig = {
    apiKey: "AIzaSyD_57GLu_fxQcWaNhRs6kpijAna5cucgUA",
    authDomain: "book-santa-99291.firebaseapp.com",
    projectId: "book-santa-99291",
    storageBucket: "book-santa-99291.appspot.com",
    messagingSenderId: "1041243617927",
    appId: "1:1041243617927:web:e14191aff3f894e2251622",
    measurementId: "G-SCCX832VVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();