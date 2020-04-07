import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';




//Import screens from other files
import HomeScreen from './screens/HomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen.js';
import MapScreen from './screens/MapScreen';
import SignInPage from './screens/SignInPage';

const Stk = createStackNavigator();//Stack navigator to move between pages

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
//Render the screen. Each Route of the navigator has a unique name so users can see which page they are on
//Users Can go back with the back button in the left side of the screen  
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
