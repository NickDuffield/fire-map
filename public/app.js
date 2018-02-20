//var uk;

var map;

var options = {
    center:{lat:52.2053,lng:0.1218},
    zoom:6,
    mapTypeId:'roadmap'
}

function setupData() {
  //console.log('working');

  var config = {
    apiKey: "AIzaSyDupH5-oRofLqaP0M3PbDcXzd-e_yjAEow",
    authDomain: "fire-map-16163.firebaseapp.com",
    databaseURL: "https://fire-map-16163.firebaseio.com",
    projectId: "fire-map-16163",
    storageBucket: "",
    messagingSenderId: "288074650901"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  var ref = database.ref('spots');
  ref.on('value', gotData, errData);

};

function gotData(data) {
  console.log(data);
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
