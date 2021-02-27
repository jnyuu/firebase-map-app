import React from 'react';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Button, Alert } from "react-native";

import Main from "./components/Main"
import Map from "./components/Map"
import List from "./components/List"
import LogIn from "./components/LogIn"
import Authorization from "./components/Authorization"
import Register from "./components/Register"

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };



  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main">
            {props => <Main {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Authorization">
            {props => <Authorization {...props} />}
          </Stack.Screen>
          <Stack.Screen name="LogIn">
            {props => <LogIn {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {props => <Register {...props} />}
          </Stack.Screen>
          <Stack.Screen name="List">
            {props => <List {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Map">
            {props => <Map {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


// export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
