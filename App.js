import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, CreateAccount} from './screens/HomeScreen';
import {MapScreen} from './screens/MapScreen';

const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title: 'Create Account'}}/>
      <AuthStack.Screen name="MapScreen" component={MapScreen} options={{title: 'Map'}}/>
      

    </AuthStack.Navigator>
  </NavigationContainer>
);
