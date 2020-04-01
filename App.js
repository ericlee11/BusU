import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';




//screens
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import MapScreen from './screens/MapScreen';
import SignInPage from './screens/SignInPage';

const Stk = createStackNavigator();

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

render(){
  return(
    <NavigationContainer>
      <Stk.Navigator initialRouteName="HomeScreen">
      <Stk.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Back'}}/>
      <Stk.Screen name="CreateAccountScreen" component={CreateAccountScreen} options={{title: 'Back'}}/>
      <Stk.Screen name="SignInPage" component={SignInPage} options={{title: 'Back'}}/>
      <Stk.Screen name="MapScreen" component={MapScreen} options={{title: 'Back'}}/>
      </Stk.Navigator>
    </NavigationContainer>
  );}
}
