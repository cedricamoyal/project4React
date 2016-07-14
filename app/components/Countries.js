import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//google map api key:
// AIzaSyCBn7DpJMQcSgoCbwtUo8q0IJ-hISQ8chs

//
// class AllUsers extends Component {
//
//   render() {
//     console.log("Hello Cedric");
//     return (
//           <h1>Hello Cedric</h1>
//
//     );
//   }
// };
//
// AllUsers.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };
//
// export default AllUsers;

// Let's create a "real-time search" component

var Countries = React.createClass({

    getInitialState: function(){
        return { searchString: '', favouriteVisits: [] };
    },

    handleChange: function(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.

        this.setState({searchString:e.target.value});
    },
    handleClick: function(e){
        var allVisits = this.state.favouriteVisits.slice(0); // Make a copy of the current state
        allVisits.push( e.currentTarget.id); // Add the string into that
        console.log(allVisits);
        this.setState({
          favouriteVisits: allVisits
        });
        console.log("fav visits" + this.state.favouriteVisits);

    },

    render: function() {
      var countryList = [
          { name: 'Argentina', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png', id: 1},
          { name: 'Bolivia', url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2015/07/Bolivia-Flag-2.png', id: 2},
          { name: 'Chile', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2000px-Flag_of_Chile.svg.png', id: 3},
          { name: 'Colombia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2000px-Flag_of_Colombia.svg.png', id: 4},
          { name: 'Paraguay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/2000px-Flag_of_Paraguay.svg.png', id: 5},
          { name: 'Uruguay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/2000px-Flag_of_Uruguay.svg.png', id: 6}
      ];

      var visitList = [
          { country: 'Argentina',name: 'Buenos Aires', url: 'https://c1.staticflickr.com/9/8424/7820374048_1a088f2dd3_b.jpg', id: 1001},
          { country: 'Argentina',name: 'Iguazu Falls', url: 'https://cdn.audleytravel.com/-/-/79/221006200144059077123219118169126227011162120009.jpg', id: 1002},
          { country: 'Argentina',name: 'Mendoza', url: 'http://argentina-travel-blog.sayhueque.com/wp-content/uploads/2015/10/Lugares-turisticos-de-Mendoza.jpg', id: 1003},
          { country: 'Bolivia',name: 'Uyuni', url: 'http://images.boomsbeat.com/data/images/full/917/1-jpg.jpg', id: 1004},
          { country: 'Chile',name: 'Atacama', url: 'http://i.telegraph.co.uk/multimedia/archive/03225/atacama-desert_3225940c.jpg', id: 1005},
          { country: 'Colombia',name: 'Medellin', url: 'http://xpat.s3.amazonaws.com/wp-content/uploads/2015/08/28151313/2Escobars_PabloEscobar.jpg', id: 1006},
          { country: 'Paraguay',name: 'Asunción', url: 'http://w0.fast-meteo.com/system/images/9564/large/asuncion_palacio.jpg?1349525174', id: 1007},
          { country: 'Uruguay',name: 'Punta Del Este', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Thehandofpuntadeleste.jpg', id: 1008}
      ];

      var markerLabel = 0;

      var searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            countryList = countryList.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

            visitList = visitList.filter(function(l){
                return l.country.toLowerCase().match( searchString );
            });

        }
        var handleClick = this.handleClick;
        return (<div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    <br />
                    <h5>The country list:</h5>

                        { countryList.map(function(l){
                            return (
                                    <div key={l.id} className="details">
                                            <p>{l.name}</p>

                                            <img src={l.url} alt={l.name}/>
                                    </div> )
                        }) }


                    <hr />
                    <h5>The visit list:</h5>


                        { visitList.map(function(l){
                            return (
                                      <div key={l.id} className="details" id={l.name} onClick={handleClick}>
                                            <p>{l.name}</p>

                                            <img src={l.url} alt={l.name}/>
                                          </div> )
                        }) }

                    <hr />
                    <h5>My trip steps:</h5>

                      { this.state.favouriteVisits.map(function(l){

                        var visitList2 = [
                            { country: 'Argentina',name: 'Buenos Aires',lat: -34.603333,long: -58.381667, url: 'https://c1.staticflickr.com/9/8424/7820374048_1a088f2dd3_b.jpg', id: 1001},
                            { country: 'Argentina',name: 'Iguazu Falls',lat: -25.686667,long: -54.444722, url: 'https://cdn.audleytravel.com/-/-/79/221006200144059077123219118169126227011162120009.jpg', id: 1002},
                            { country: 'Argentina',name: 'Mendoza',lat: -32.883333,long: -68.816667, url: 'http://argentina-travel-blog.sayhueque.com/wp-content/uploads/2015/10/Lugares-turisticos-de-Mendoza.jpg', id: 1003},
                            { country: 'Bolivia',name: 'Uyuni', url: 'http://images.boomsbeat.com/data/images/full/917/1-jpg.jpg', id: 1004},
                            { country: 'Chile',name: 'Atacama', url: 'http://i.telegraph.co.uk/multimedia/archive/03225/atacama-desert_3225940c.jpg', id: 1005},
                            { country: 'Colombia',name: 'Medellin', url: 'http://xpat.s3.amazonaws.com/wp-content/uploads/2015/08/28151313/2Escobars_PabloEscobar.jpg', id: 1006},
                            { country: 'Paraguay',name: 'Asunción', url: 'http://w0.fast-meteo.com/system/images/9564/large/asuncion_palacio.jpg?1349525174', id: 1007},
                            { country: 'Uruguay',name: 'Punta Del Este', url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Thehandofpuntadeleste.jpg', id: 1008}
                        ];

                            var visitUrl = "";
                            var visitLat;
                            var visitLong;

                            var marker;

                            console.log(visitList2);
                            for (var i = 0; i < visitList2.length; i++){
                              if (visitList2[i].name == l) {
                                visitUrl = visitList2[i].url;
                                visitLat = visitList2[i].lat;
                                visitLong = visitList2[i].long;
                                markerLabel += 1;

                                map.setCenter({lat: visitLat, lng: visitLong});

                                marker = new google.maps.Marker({
                                                        position: {lat: visitLat, lng: visitLong},
                                                        map: map,
                                                        label: markerLabel.toString(),
                                                        title: 'Hello World!'
                                                      });


                              }
                            }


                          return (
                                <div key={l} className="details">
                                          <p> {l} </p>

                                          <img src={visitUrl} alt={l}/>
                                        </div> )

                      }) }

                      <hr />
                      <h5>My trip on Google map:</h5>
                      <div id="map"></div>


                </div>)

    }
});



// Render the SearchExample component on the page



Countries.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Countries;
