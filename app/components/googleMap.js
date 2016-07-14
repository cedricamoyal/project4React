import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//google map api key:
// AIzaSyCBn7DpJMQcSgoCbwtUo8q0IJ-hISQ8chs

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

/////////
