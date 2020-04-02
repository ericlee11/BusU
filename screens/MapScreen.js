//remember to import imports in the cd of the file
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { locations } from './Data'

  class MapScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const{navigation} = this.props;

    return(
      <View style={styles.container}>
            <MapView style={styles.map}
          initialRegion={{
              latitude: 43.0729,
              longitude: -76.131502,
              latitudeDelta: 1,
              longitudeDelta: 1,
          }}
        >
          
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

    );
    }
  }
  
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




  
  
