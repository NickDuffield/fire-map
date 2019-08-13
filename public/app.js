(function() {
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
})();

//map setup and initialise
var map;

var options = {
  center: { lat: 52.230701, lng: 0.125432 },
  zoom: 14,
  mapTypeId: "roadmap"
};

function initMap() {
  var setMap = new google.maps.Map(document.getElementById("map"), options);
  map = setMap;
}
