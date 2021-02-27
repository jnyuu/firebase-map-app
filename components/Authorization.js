import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import firebase from "firebase"

var config = {
    apiKey: "AIzaSyAg8xOJwBNh6OZiluOsBMepiYUHtfyoo88",
    authDomain: "kozik4ib1.firebaseapp.com",
    databaseURL: "https://kozik4ib1.firebaseio.com",
    projectId: "kozik4ib1",
    storageBucket: "kozik4ib1.appspot.com",
    messagingSenderId: "388422984293",
    appId: "1:388422984293:web:3835287f159d299c999c8c",
    measurementId: "G-C08X9X5Q2J"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate("List")
            }
            else {
                this.props.navigation.navigate("LogIn")
            }
        })
    }
    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});
export default Authorization;
