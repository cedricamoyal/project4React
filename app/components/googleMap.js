import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class GoogleMap extends Component {



    render() {
      console.log("Hello Cedric");
      return (
            <h5>Hello Google Map</h5>
      );
    }
  };

  ReactDOM.render(
    <GoogleMap />,
    document.getElementById("googleMap")
  );

  export default GoogleMap;

///////////////

// var visitList3 = [
//     { country: 'Argentina',name: 'Buenos Aires',lat: -34.603333,long: -58.381667, url: 'https://c1.staticflickr.com/9/8424/7820374048_1a088f2dd3_b.jpg', id: 1001},
//     { country: 'Argentina',name: 'Iguazu Falls',lat: -25.686667,long: -54.444722, url: 'https://cdn.audleytravel.com/-/-/79/221006200144059077123219118169126227011162120009.jpg', id: 1002},
//     { country: 'Argentina',name: 'Mendoza',lat: -32.883333,long: -68.816667, url: 'http://argentina-travel-blog.sayhueque.com/wp-content/uploads/2015/10/Lugares-turisticos-de-Mendoza.jpg', id: 1003}
// ];

////////////////

// initMap: function () {
//         var directionsService = new google.maps.DirectionsService;
//         var directionsDisplay = new google.maps.DirectionsRenderer;
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: {lat: visitList3[0].lat, lng: visitList3[0].long}
//         });
//
//       for (var i = 0; i < visitList3; i++) {
//
//         var iconBase = 'http://maps.google.com/mapfiles/kml/paddle/<%= step.position %>.png';
//         var marker = new google.maps.Marker({
//           position: {lat: visitList3[i].lat, lng: visitList3[i].long},
//           map: map,
//           icon: iconBase
//         });
//
//       }
//
//         directionsDisplay.setMap(map);
//
//         document.getElementById('submit').addEventListener('click', function() {
//           calculateAndDisplayRoute(directionsService, directionsDisplay);
//         });
//       },

//////////

// function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//   var waypts = [];
//   var checkboxArray = document.getElementById('waypoints');
//   for (var i = 0; i < checkboxArray.length; i++) {
//     if (checkboxArray.options[i].selected) {
//       waypts.push({
//         location: checkboxArray[i].value,
//         stopover: true
//       });
//     }
//   }
//
//   directionsService.route({
//   origin: document.getElementById('start').value,
//   destination: document.getElementById('end').value,
//   waypoints: waypts,
//   optimizeWaypoints: true,
//   travelMode: google.maps.TravelMode.DRIVING
// }, function(response, status) {
//   if (status === google.maps.DirectionsStatus.OK) {
//     directionsDisplay.setDirections(response);
//     var route = response.routes[0];
//     var summaryPanel = document.getElementById('directions-panel');
//     summaryPanel.innerHTML = '';
//     // For each route, display summary information.
//     for (var i = 0; i < route.legs.length; i++) {
//       var routeSegment = i + 1;
//       summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
//           '</b><br>';
//       summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
//       summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
//       summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
//     }
//   } else {
//     window.alert('Directions request failed due to ' + status);
//   }
// });
// }

///////////




////////////////////////////
// <div class='container'>
//
//           <div class='details'>
//           <h5>Start date: </h5>
//           <h5>Finish date: </h5>
//           <h5>Duration: </h5>
//           <h5>Description: </h5>
//
//          </div>
//
//
//
//
//
//        <div id="right-panel">
//               <b>Start:</b>
//                     <select id="start">
//
//                         <% stepsPosition.each do |step| %>
//
//                         <option value="<%= step.visit.visitLatitude %>, <%= step.visit.visitLongitude %>"><%= step.visit.name %></option>
//
//                         <% end %>
//                     </select>
//               <br>
//               <br>
//               <b>Waypoints:</b> <br>
//               <i>(Ctrl-Click for multiple selection)</i> <br>
//               <select multiple id="waypoints">
//
//                 <% stepsPosition.each do |step| %>
//
//                 <option value="<%= step.visit.visitLatitude %>, <%= step.visit.visitLongitude %>"><%= step.visit.name %></option>
//
//                 <% end %>
//
//               </select>
//               <br>
//               <br>
//               <b>End:</b>
//               <select id="end">
//
//                 <% stepsPosition.each do |step| %>
//
//                 <option value="<%= step.visit.visitLatitude %>, <%= step.visit.visitLongitude %>"><%= step.visit.name %></option>
//
//                 <% end %>
//
//
//               </select>
//               <br>
//               <br>
//
//                   <div class="submitCenter1"><div class="submitCenter2">
//                     <input type="submit" id="submit">
//                   </div></div>
//
//
//       </div>
//
//
//       <div id="directions-panel"></div>
//
// </div>
//
//
//


///////////////////////////
