import React, { Component } from 'react';
import { InfoWindow,Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '85%',
  height: '70%',
  position: 'contained',
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}         //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
     return (
       <Map
         id="map"
         google={this.props.google}
         zoom={12}
         style={mapStyles}
         initialCenter={{
          lat: -1.9706,
          lng: 30.1044
         }}
       >
       <Marker
          onClick={this.onMarkerClick}
          name={'African Leadership University'}
          description={'ALU Rwanda campus located in the fast-growing innovation hub of Kigali'}
          position={{
            lat:-1.951499, lng: 30.093012}}
        />
        <Marker
         onClick={this.onMarkerClick}
         name={'Makumba Bar and Restaurant Remera'}
         description={'One of three Makumba bars in Kigali that is very spacious and attracts many Congolese members of the community. In the evenings, you can often find live concerts featuring Swahili music.'}
         position={{
           lat:-1.9597151, lng: 30.1111660}}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Makumba Bar and Restaurant Kimironko'}
          description={'One of three Makumba bars in Kigali that is very spacious and attracts many Congolese members of the community. In the evenings, you can often find live concerts featuring Swahili music.'}
          position={{
            lat:-1.9506602, lng: 30.1250730}}
        />
        <Marker
         onClick={this.onMarkerClick}
         name={'Gikondo New H-zone Bar'}
         description={'A lively bar in Gikondo that hosts many concerts with Congolese and Ugandan artists.'}
         position={{
           lat:-1.9679805, lng: 30.0816876}}
         />
         <Marker
          onClick={this.onMarkerClick}
          name={'Small Burundian Bar in Cyvugiza'}
          description={'A small Burundian Bar in Cyvugiza where all the local Burundians hang-out. Stop by to practice your language skills and to learn about Burundian food and culture.'}
          position={{
            lat:-1.9851570, lng: 30.0504660}}
          />
          <Marker
           onClick={this.onMarkerClick}
           name={'Billiards Bar in Gikondo'}
           description={'Kick back and play some pool at this small local bar in the heart of Gikondo.'}
           position={{
             lat:-1.963866, lng: 20.078416}}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={'Hair Salon in Gikondo'}
            description={"Need a new hairdo? Check out Maman prince's small and cozy hair salon for a fusion of Congolese and Rwandan cultures."}
            position={{
              lat:-1.9693830, lng: 30.0715830}}
          />
          <Marker
           onClick={this.onMarkerClick}
           name={'Barbershop in Cyvugiza'}
           description={'A cozy one-man barbershop located in the residential neighborhood of Cyvugiza.'}
           position={{
             lat:-1.9826750, lng: 30.0483960}}
           />
           <Marker
            onClick={this.onMarkerClick}
            name={'Billiards Bar in Gikondo'}
            description={'Kick back and play some pool at this small local bar in the heart of Gikondo.'}
            position={{
              lat:-1.963866, lng: 20.078416}}
            />
            <Marker
             onClick={this.onMarkerClick}
             name={'Kenya Kareoke Bar In Remera (Master Grill)'}
             description={'KA fun restaurant and bar where many Kenyans hang out and converse in Swahili. In the evenings, there is also kareoke!'}
             position={{
               lat:-1.9591877, lng: 30.1112857}}
             />
             <Marker
              onClick={this.onMarkerClick}
              name={'Burundian Restaurant in Remera'}
              description={'Nestled between Kenyan and Congolese bars, this Burundian restaurant is another opportunity to practice Swahili with the locals and eat great Burundian food.'}
              position={{
                lat:-1.9593840, lng: 30.1107190}}
              />
              <Marker
               onClick={this.onMarkerClick}
               name={'Stadium in Remera (Amahoro National Stadium)'}
               description={'Get some exercise by leisurely playing football with locals at the Amahoro National Stadium.'}
               position={{
                 lat:-1.9553705, lng: 30.1150301}}
               />
               <Marker
                onClick={this.onMarkerClick}
                name={'Green Market in Gikondo'}
                description={'A green market that sells local food and fashion products. Check their <a href=\"https://www.facebook.com/GreenAfrican/\">Facebook page</a> or business hours as they regularly change.'}
                position={{
                  lat:-1.966476, lng: 30.080412}}
                />
                <Marker
                 onClick={this.onMarkerClick}
                 name={'Restoration Church (Masoro)'}
                 description={'An evangelical church where many Swahili speakers attend services. Pastor Masasu is the church leader who often incorporates Swahili into the sermons.'}
                 position={{
                   lat:-1.9487127, lng: 30.1415655}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Caplaki Craft Village ( Kiyovu)'}
                  description={'Over 40 individual stalls of hand-made and local crafts fill Caplaki Craft Village. Come to Caplaki to practice your bargaining skills and leave with a few souvenirs!'}
                  position={{
                  lat:-1.9578973, lng: 30.0715381}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Chez John Restaurant (Kiyovu)'}
                  description={'Enjoy a delicious buffet of local food for lunch at Chez John.'}
                  position={{
                  lat:-1.9574366, lng: 30.0700602}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Gikondo Market'}
                  description={'Practise your Kiswahili while shopping for fresh local produce. You can find everything from cassava to tree tomatoes and fresh mangoes!'}
                  position={{
                  lat:-1.969780, lng: 30.075147}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={''}
                  description={'Over 40 individual stalls of hand-made and local crafts fill Caplaki Craft Village. Come to Caplaki to practice your bargaining skills and leave with a few souvenirs!'}
                  position={{
                  lat:-1.9578973, lng: 30.0715381}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Mosque Majengo'}
                  description={'A small mosque where Muslim families offer their daily prayers and often converse in Swahili.'}
                  position={{
                  lat:-1.966670, lng: 30.058221}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Congolese Restaurant in Nyabugogo'}
                  description={"A fun restaurant where Congolese, Tanzanians and Rwandans hang out and converse in Swahili. One of the most popular restaurants for the surrounding markets' business owners."}
                  position={{
                  lat:-1.942227, lng: 30.044764}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Simba Market'}
                  description={'A Kenyan supermarket stocked with all the products you could ever need.'}
                  position={{
                  lat:-1.9530862, lng: 30.0932390}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Java House'}
                  description={'A Keyan coffee shop chain with a wide variety of drinks and food available.'}
                  position={{
                  lat:-1.9530862, lng: 30.0932390}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Terminal Market in Nyabugogo'}
                  description={'A vibrant local market divided in sections and selling everything you can think off - vegetables, fruit, meat, clothing and fabrics.'}
                  position={{
                  lat:-1.941297, lng: 30.046432}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Market in Nyabugogo'}
                  description={"Practice your bargaining skills at Kigali's busiest shopping area with great restaurants for all budgets, a bus terminal and many vendors selling electronics, fruits, vegetables and clothing."}
                  position={{
                  lat:-1.940805, lng: 30.044674}}
                 />
                 <Marker
                  onClick={this.onMarkerClick}
                  name={'Green Corner Restaurant in Rwezamenyo II'}
                  description={"Claimed the best fish restaurant in the area where Congolese and Burundian hang out and converse in Swahili."}
                  position={{
                  lat:-1.973981, lng: 30.047673}}
                 />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>{this.state.selectedPlace.description}</p>
          </div>
        </InfoWindow>
      </Map>
     );
   }
 }

 export default GoogleApiWrapper({
   apiKey: 'AIzaSyAvOrHV6khC62g8fEuiExotGDSVBBGxPOA',
 })(MapContainer);
