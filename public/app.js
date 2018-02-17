(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDupH5-oRofLqaP0M3PbDcXzd-e_yjAEow",
    authDomain: "fire-map-16163.firebaseapp.com",
    databaseURL: "https://fire-map-16163.firebaseio.com",
    projectId: "fire-map-16163",
    storageBucket: "",
    messagingSenderId: "288074650901"
  };
  firebase.initializeApp(config);

  var mySpots = firebase.database().ref().child('spots');

  mySpots.on('value', snap => console.log(snap.val()));  

}());
