let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -42.882, lng: 147.325 },
    zoom: 8,
  });
}
