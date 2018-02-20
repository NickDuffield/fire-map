



//GENERAL: need to tidy up my code structure now.

var map;

var options = {
    center:{lat:52.2053,lng:0.1218},
    zoom:14,
    mapTypeId:'roadmap'
}

function addPin(spot) {

  var marker = new google.maps.Marker({
    position: spot,
    map: map
  });

};

function setupData() {

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

    var database = firebase.database();
    var ref = database.ref('scores');

    ref.on('value', gotData, errData);

};

function gotData(data) {
  //useful technique for creating an array
  var scores = data.val();
  var keys = Object.keys(scores);
  //var i = 0;
  var k = keys[0];
  var coords = scores[k].coords;

  addPin(coords);

  //loop for adding multiple pins. check tutorial for adding
  /*for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var name = scores[k].name;
    var score = scores[k].score;
    var coords = scores[k].coords;
    console.log(coords)
  }*/

};

function errData(data) {
  console.log('Error!');
  console.log(err);
};

function initMap() {

  var setMap = new google.maps.Map(document.getElementById('map'), options);
  map = setMap;

  setupData();

}
