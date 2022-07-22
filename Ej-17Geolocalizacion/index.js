
// -39.87473804579723, -66.6241337634007 Rio negro
// -41.04311946243724, -62.826216809431486 el condor, argentina
// -40.75034652574004, -63.26928729318418 san javier
// -41.15397260243032, -63.47368239800709 la ensenada
// 43.38870217114164, -3.2270406357812633 ostende eespaña

var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: -39.87473804579723, lng: -66.6241337634007},
   zoom: 6
 });

 var marker = new google.maps.Marker({
    position: {lat: -41.04311946243724, lng: -62.826216809431486},
    map: map,
    title: 'El Condor, Rio Negro. Argentina'
 });

  var marker = new google.maps.Marker({
    position: {lat: -41.15397260243032, lng: -63.47368239800709},
    map: map,
    title: 'La Ensenada, Rio Negro. Argentina'
 });

 var marker = new google.maps.Marker({
    position: {lat: -40.75034652574004, lng: -63.26928729318418},
    map: map,
    title: 'San Javier, Rio Negro. Argentina'
 });

}