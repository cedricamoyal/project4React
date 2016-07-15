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
        this.setState({
          favouriteVisits: allVisits
        });

    },
    refreshVisitList: function(e) {
      e.preventDefault();
      this.setState({
        favouriteVisits: []
      });
      for (var i = 0; i < markers.length; i++) {
                  markers[i].setMap(null);
                };
      markers = [];


    },

    render: function() {
      var countryList = [
          { name: 'Argentina', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2000px-Flag_of_Argentina.svg.png', id: 1},
          { name: 'Bolivia', url: 'http://cdn.wonderfulengineering.com/wp-content/uploads/2015/07/Bolivia-Flag-2.png', id: 2},
          { name: 'Chile', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/2000px-Flag_of_Chile.svg.png', id: 3},
          { name: 'Colombia', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2000px-Flag_of_Colombia.svg.png', id: 4},
          { name: 'Paraguay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/2000px-Flag_of_Paraguay.svg.png', id: 5},
          { name: 'Peru', url: 'http://peruflag.facts.co/peruflagof/PeruFlagImage.png', id: 6},
          { name: 'Uruguay', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/2000px-Flag_of_Uruguay.svg.png', id: 7}
      ];

      var visitList = [
          { country: 'Argentina',name: 'Buenos Aires',lat: -34.603333,long: -58.381667, url: 'https://c1.staticflickr.com/9/8424/7820374048_1a088f2dd3_b.jpg', id: 1001},
          { country: 'Argentina',name: 'Iguazu Falls',lat: -25.686667,long: -54.444722, url: 'https://cdn.audleytravel.com/-/-/79/221006200144059077123219118169126227011162120009.jpg', id: 1002},
          { country: 'Argentina',name: 'Mendoza',lat: -32.883333,long: -68.816667, url: 'http://argentina-travel-blog.sayhueque.com/wp-content/uploads/2015/10/Lugares-turisticos-de-Mendoza.jpg', id: 1003},
          { country: 'Bolivia',name: 'Uyuni',lat: -20.133775,long: -67.489133, url: 'http://images.boomsbeat.com/data/images/full/917/1-jpg.jpg', id: 1004},
          { country: 'Bolivia',name: 'La Paz',lat: -16.5,long: -68.15, url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Desfile_en_El_Alto,_Bolivia.jpg', id: 1005},
          { country: 'Bolivia',name: 'Lake Titicaca',lat: -15.75,long: -69.416667, url: 'http://www.explorebyyourself.com/files/lake-titicaca5.jpg', id: 1006},
          { country: 'Chile',name: 'Atacama',lat: -24.5,long: -69.25, url: 'http://i.telegraph.co.uk/multimedia/archive/03225/atacama-desert_3225940c.jpg', id: 1007},
          { country: 'Colombia',name: 'Medellin',lat: 6.230833,long: -75.590556, url: 'http://xpat.s3.amazonaws.com/wp-content/uploads/2015/08/28151313/2Escobars_PabloEscobar.jpg', id: 1008},
          { country: 'Paraguay',name: 'Asunción',lat: -25.266667,long: -57.633333, url: 'http://w0.fast-meteo.com/system/images/9564/large/asuncion_palacio.jpg?1349525174', id: 1009},
          { country: 'Peru',name: 'Machu Picchu',lat: -13.163333,long: -72.545556, url: 'http://travelercorner.com/wp-content/uploads/2016/06/machu-picchu-historic-wonder.jpg', id: 10010},
          { country: 'Peru',name: 'Cusco',lat: -13.525,long: -71.972222, url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Rainbow_flag_Cusco.jpg', id: 1011},
          { country: 'Peru',name: 'Lambayeque',lat: -6.7,long: -79.9, url: 'http://portal.andina.com.pe/EDPfotografia/Thumbnail/2015/04/05/000288294W.jpg', id: 1012},
          { country: 'Uruguay',name: 'Punta Del Este',lat: -34.966667,long: -54.95, url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Thehandofpuntadeleste.jpg', id: 1013}
      ];

      var markerLabel = 0;
      var keyIdSteps = 0;


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
        return (<div id="inside">
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Where are we going?" />
                    <br />
                    <h5>List of Countries:</h5>

                        { countryList.map(function(l){
                            return (
                                    <div key={l.id} className="details">
                                            <p>{l.name}</p>

                                            <img src={l.url} alt={l.name}/>
                                    </div> )
                        }) }


                    <hr />
                    <h5>Places to Visit:</h5>


                        { visitList.map(function(l){
                            return (
                                      <div key={l.id} className="details" id={l.name} onClick={handleClick}>
                                            <p>{l.name}</p>

                                            <img src={l.url} alt={l.name}/>
                                          </div> )
                        }) }

                    <hr />
                    <h5>My Favourite Places: </h5>

                    <div id="myTripSteps">

                      { this.state.favouriteVisits.map(function(l){
                        keyIdSteps += 1;

                        var visitList2 = [
                            { country: 'Argentina',name: 'Buenos Aires',lat: -34.603333,long: -58.381667, url: 'https://c1.staticflickr.com/9/8424/7820374048_1a088f2dd3_b.jpg', id: 1001},
                            { country: 'Argentina',name: 'Iguazu Falls',lat: -25.686667,long: -54.444722, url: 'https://cdn.audleytravel.com/-/-/79/221006200144059077123219118169126227011162120009.jpg', id: 1002},
                            { country: 'Argentina',name: 'Mendoza',lat: -32.883333,long: -68.816667, url: 'http://argentina-travel-blog.sayhueque.com/wp-content/uploads/2015/10/Lugares-turisticos-de-Mendoza.jpg', id: 1003},
                            { country: 'Bolivia',name: 'Uyuni',lat: -20.133775,long: -67.489133, url: 'http://images.boomsbeat.com/data/images/full/917/1-jpg.jpg', id: 1004},
                            { country: 'Bolivia',name: 'La Paz',lat: -16.5,long: -68.15, url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Desfile_en_El_Alto,_Bolivia.jpg', id: 1005},
                            { country: 'Bolivia',name: 'Lake Titicaca',lat: -15.75,long: -69.416667, url: 'http://www.explorebyyourself.com/files/lake-titicaca5.jpg', id: 1006},
                            { country: 'Chile',name: 'Atacama',lat: -24.5,long: -69.25, url: 'http://i.telegraph.co.uk/multimedia/archive/03225/atacama-desert_3225940c.jpg', id: 1007},
                            { country: 'Colombia',name: 'Medellin',lat: 6.230833,long: -75.590556, url: 'http://xpat.s3.amazonaws.com/wp-content/uploads/2015/08/28151313/2Escobars_PabloEscobar.jpg', id: 1008},
                            { country: 'Paraguay',name: 'Asunción',lat: -25.266667,long: -57.633333, url: 'http://w0.fast-meteo.com/system/images/9564/large/asuncion_palacio.jpg?1349525174', id: 1009},
                            { country: 'Peru',name: 'Machu Picchu',lat: -13.163333,long: -72.545556, url: 'http://travelercorner.com/wp-content/uploads/2016/06/machu-picchu-historic-wonder.jpg', id: 10010},
                            { country: 'Peru',name: 'Cusco',lat: -13.525,long: -71.972222, url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Rainbow_flag_Cusco.jpg', id: 1011},
                            { country: 'Peru',name: 'Lambayeque',lat: -6.7,long: -79.9, url: 'http://portal.andina.com.pe/EDPfotografia/Thumbnail/2015/04/05/000288294W.jpg', id: 1012},
                            { country: 'Uruguay',name: 'Punta Del Este',lat: -34.966667,long: -54.95, url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Thehandofpuntadeleste.jpg', id: 1013}
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
                               markers.push(marker);
                              }
                            }


                          return (

                                <div key={keyIdSteps} className="details">
                                          <p> {markerLabel.toString()}: {l} </p>
                                          <p> The keyId is: {keyIdSteps} </p>

                                          <img src={visitUrl} alt={l}/>
                                        </div> )

                      }) }

                      </div>

                      <form onSubmit={this.refreshVisitList}>
                        <button>Refresh visit list</button>
                      </form>

                      <hr />
                      <h5>My trip on Google map:</h5>



                </div>)

    }
});



// Render the SearchExample component on the page



Countries.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Countries;
