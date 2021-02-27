import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

import firebase from "firebase"
import MyButton from "./MyButton"

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
        };
        this.firebaseLogin = this.firebaseLogin.bind(this);
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    firebaseLogin() {
        console.log(this.state.email);
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({ email: "", password: "" })
                this.props.navigation.navigate("Authorization")
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <View
                style={styles.container}
            >
                <View
                    style={styles.half}
                >
                    <Image
                        style={styles.img}
                        source={require('../assets/bike.jpg')}
                    />
                </View>
                <View
                    style={styles.half2}
                >
                    <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
                    <TextInput
                        placeholder='Login'
                        onChangeText={(val) => { this.onChangeText("email", val) }}
                        style={{ borderColor: "black", borderWidth: 1, width: 300 }}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={(val) => { this.onChangeText("password", val) }}
                        style={{ borderColor: "black", borderWidth: 1, width: 300 }}
                        value={this.state.password}
                    />
                    <MyButton btnText="Log In" navigation={this.props.navigation} pressAction1={this.firebaseLogin} />
                    <MyButton btnText="Register an account" navTarget="Register" navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'stretch',
    },
    half: {
        alignItems: 'center',
        flex: 1,

    },
    half2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    img: {
        borderRadius: 50,
        width: 200,
        height: 200,
        borderRadius: 100
    },
    errorMessage: {
        color: "red",
    }
})
export default LogIn;
