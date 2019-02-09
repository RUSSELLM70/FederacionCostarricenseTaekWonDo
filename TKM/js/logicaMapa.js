
function initialize() {
  var myLatLng = {lat: 9.946210299999999, lng: -84.1392553};
  var mapOptions = {
    zoom:13,
    center:myLatLng
  }

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Federación Costarricense de Taekwondo'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);