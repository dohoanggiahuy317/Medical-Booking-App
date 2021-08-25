
var app_fireBase = {};

(function(){
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCToxrgRTY-Q_1Oznmy_h092KPTWOjld1U",
    authDomain: "med-app-96368.firebaseapp.com",
    projectId: "med-app-96368",
    storageBucket: "med-app-96368.appspot.com",
    messagingSenderId: "781663276120",
    appId: "1:781663276120:web:d7f8ae7c539e8f62630e2d",
    measurementId: "G-91PMY43Q75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  app_fireBase = firebase;
})()