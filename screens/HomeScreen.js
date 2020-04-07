import React from "react";
import { View, Text, StyleSheet, Button, Image,TextInput } from "react-native";
import { AuthContext } from "./context";
import { NavigationActions } from "react-navigation";
import BusUIcon from '../assets/images/BusUIcon.png'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*
Home Screen loads first when you open the Application
Renders the screen.
Has all the picture and buttons to move to desired screen
Once a button is clicked it will move you to the next screen.
*/
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const {navigation} = this.props;
    return(
      <View style={styles.container} >

      <Text style = {styles.homeText}>
       Welcome to BusU! 
       </Text>
       <Image style = {{width: 300, top: -100}}
       source = {require('../assets/images/BusUIcon.png')}
       />      
      <Text style = {styles.chooseOptionText}>Please choose an option below</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignInPage")} 
      />
      <Button
        title="Create Account" onPress={() => navigation.navigate("CreateAccountScreen")}
      />
      <Button title="Skip to Map" onPress={() => navigation.navigate("MapScreen")} 
      />
      </View>

    );//return end
  }//end render
}//class


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'nunito-regular'
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  homeText:{
    top: -100,
    color: 'orange',
    fontSize: 50,
    fontWeight:'bold',
    textAlign:"center",
    borderRadius: 100,

  },
  chooseOptionText:{
    top: -50,
    color: 'orange',
    fontSize: 25,
    fontWeight:'bold',
    textAlign:"center"
  },


});
export default HomeScreen;
