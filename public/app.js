
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDupH5-oRofLqaP0M3PbDcXzd-e_yjAEow",
    authDomain: "fire-map-16163.firebaseapp.com",
    databaseURL: "https://fire-map-16163.firebaseio.com",
    projectId: "fire-map-16163",
    storageBucket: "fire-map-16163.appspot.com",
    messagingSenderId: "288074650901"
  };
  firebase.initializeApp(config);

  //reference database
  var database = firebase.database();
  var ref = database.ref('spots');

  //set event type to capture data
  ref.on('value', gotData, errData);

}());

function gotData(data) {
  //useful technique for creating an array
  var spots = data.val();
  var keys = Object.keys(spots);
  var i = 0;
  var k = keys[i];
  var coords = spots[k].coords;

  //addPin(coords);
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });

  //console.log(spots);

  //loop for adding multiple pins. check skatespotter for this function
  /*for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = spots[k].name;
    var score = spots[k].score;
    var coords = spots[k].coords;
    console.log(coords)
  }*/

};

//catch error loading failure
function errData(data) {
  console.log('Error!');
  console.log(err);
};

//map setup and initialise
var map;

var options = {
    center:{lat:52.230701,lng:0.125432},
    zoom:14,
    mapTypeId:'roadmap'
}

function initMap() {
  var setMap = new google.maps.Map(document.getElementById('map'), options);
  map = setMap;
}
