var firstSpot;

function myFunction(){
  console.log(firstSpot);

};


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

  //MY CLUE FOR READING DATA MAY BE HERE
  //https://firebase.google.com/docs/database/web/read-and-write

  var mySpots = firebase.database().ref().child('spots').child('spot-1').getValue();

  //mySpots.on('value', snap => console.log(snap.val()));

  mySpots.on('value', snap => {
    var testSnap = snap.val();
    firstSpot = testSnap

    myFunction();

  });


}());
