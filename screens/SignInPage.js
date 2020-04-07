//remember to import imports in the cd of the file
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/*
Sign In Page:
Email input box and password input box
Sign in button brings you to the map screen
*/
class SignInPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{navigation} = this.props;

  return(
    <View style={styles.container}>
      <Text style = {styles.signinpagetext}>Please Sign In</Text>
        <TextInput style = {styles.usernameinput}
          placeholder = "Username"
          returnKeyType = "Next"
          autoCorrect = {false}
          autoCapitalize = {false}
          />
          <TextInput style = {styles.passwordinput}
          placeholder = "Password"
          returnKeyType = "Next"
          autoCorrect = {false}
          autoCapitalize = {false}

          />
        <Button 
        style = {styles.signinconfirm} 
        title="Sign In" 
        onPress={() => navigation.navigate("MapScreen")}  />
    </View>

  );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fffafa",

  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  signinconfirm: {
    borderRadius: 5,
    color: "orange",
    top: 100,
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
  usernameinput: {
    top: -135,
    paddingLeft: 20,
    height: 50,
    fontSize: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 30,
    color: '#34495e',
    width: 200,
},
passwordinput: {
  top: -125,
  paddingLeft: 20,
  height: 50,
  fontSize: 30,
  backgroundColor: 'white',
  borderWidth: 1,
  marginBottom: 30,
  color: '#34495e',
  width: 200,
},
createAccountTextHeader: {
  top: -175,
  color: 'orange',
  fontSize: 35,
  fontWeight:'bold',
  textAlign:"center",
  borderRadius: 100,
},
emailaddressinput: {
  top: -120,
  paddingLeft: 20,
  height: 50,
  fontSize: 30,
  backgroundColor: 'white',
  borderWidth: 1,
  marginBottom: 30,
  color: '#34495e',
  width: 250,

},
signinpagetext: {
  top: -170,
  paddingLeft: 50,
  height: 100,
  fontSize: 50,
  marginBottom: 15,
  color: 'orange',
  width: 400,
  alignItems: "center"

},


});


export default SignInPage;


 
