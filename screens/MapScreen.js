//remember to import imports in the cd of the file
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { locations } from './Data'
/*
Map Screen loads with map markers
User Location is processed and put onto the map and region
*/
  class MapScreen extends React.Component {
    constructor(props) {

      super(props);
      this.state={
        latitude: 43.0392,
        longitude: -76.1351,
        //latitudeDelta: 0,
       // longitudeDelta: 0,
        error: null
      }
    }
    componentDidMount(){
      navigator.geolocation.getCurrentPosition(position =>{
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });

      }, 
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
      );
    }
    

    render() {
      const{navigation} = this.props;

    return(
      <View style={styles.container}>
            <MapView style={styles.map}
          region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0932,
          }}
          showsCompass={true}
          showsUserLocation={true}
          rotateEnabled={false}
        >
          <Marker coordinate= {this.state}
          title={"Your Location as of right now"}
          />
          
        <MapView.Marker
            coordinate={{latitude: 43.0729,
            longitude: -76.131502}}
            title={"title"}
            description={"description"}
         />
          
          {
            locations.map(marker => (
              <Marker
             coordinate = {{latitude: marker.latitude,
               longitude: marker.longitude}}
              />
            ))
          }
          
      </MapView>
      </View>

    );//return end
    }//end render
  }//end class
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
});

 export default MapScreen;




  
  
