import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import firebase from "firebase"
import MyButton from "./MyButton"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
        };
        this.firebaseRegister = this.firebaseRegister.bind(this);
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    firebaseRegister() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.setState({ email: "", password: "" })
                this.props.navigation.navigate("LogIn")
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    // Login to an existing account
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
                        onChangeText={(val) => { this.onChangeText("password", val) }}
                        secureTextEntry={true}
                        style={{ borderColor: "black", borderWidth: 1, width: 300 }}
                        value={this.state.password}
                    />
                    <MyButton btnText="Register" navigation={this.props.navigation} pressAction1={this.firebaseRegister} />
                    <MyButton btnText="Login to an existing account" navTarget="LogIn" navigation={this.props.navigation} />

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
export default Register;
