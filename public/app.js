
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

//global var for display panels
var spotInfo;

function gotData(data) {
  //reference to database objects
  var spots = data.val();
  //useful technique for creating an array
  var keys = Object.keys(spots);

  //infowindow and marker setup
	var infowindow = new google.maps.InfoWindow();

  //creates and adds markers to map
  function addMarkers(props) {
    //poperty values
    var spotName = spots[props].spotName;
    var iconImg = spots[props].iconImg;
    var imageUrl = spots[props].imageUrl;

    //NEED TO FIX THIS VARIABLE. Look into concatination for javascript variables
    //var infoWinDetails = spots[props].infoWinDetails;
    var infoWinDetails = '<div class="map-spot-marker-title">Orchard Park Skatepark</div>'+'<button type="button" onclick="showSpotDetails()">Show details</button>';
    var coords = spots[props].coords;

    //add marker
    var marker = new google.maps.Marker({
      position: coords,
      map: map
    });

    //check for marker image
    if(iconImg){
        marker.setIcon(iconImg);
    }

    //check for no name.
    if(spotName === undefined) {
        spotName = 'No name'
    }

    //console.log(infoWinDetails)


    //add event listener to marker
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {

            //set info window content
            if(infoWinDetails){
                infowindow.setContent(infoWinDetails);
            }

            //open infowindow
            infowindow.open(map, marker);

            //captures new details to update the panel
            spotInfo = props;

        }
    })(marker, i));

  }

  //loop for adding multiple pins
  for (i = 0; i < keys.length; i++) {
    addMarkers(keys[i]);
  }

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
