import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import firebase from "firebase"



class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigate() {
        this.props.navigation.navigate(this.props.navTarget)
    }

    navigateAndAction1(actionParam) {
        this.props.navigation.navigate(this.props.navTarget)
        if (actionParam != null) {
            this.props.pressAction1(actionParam)
        } else {
            this.props.pressAction1()
        }
    }

    map() {
        this.props.navigation.navigate("Map", { marker: this.props.marker })
    }

    logBtnName() {
        console.log(this.props.btnText);
    }

    render() {
        let touchable;
        switch (this.props.btnText) {
            case "Start":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.navigate()
                    }>
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;

            case "Log In":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.props.pressAction1()
                    }>
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;
            case "Register an account":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.navigate()
                    }>
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;

            case "Register":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.props.pressAction1()
                    }>
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;
            case "Login to an existing account":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.navigate()
                    }>
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;
            case "Main Page":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.navigate()
                    }
                >
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;
            case "Logout":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        firebase.auth()
                            .signOut()
                            .then(() => alert(`żegnaj : ${this.props.userName}`))
                            .catch((error) => alert(error))
                    }}
                >
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;
            case "Mapa":
                touchable = <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>
                        this.map()
                    }
                >
                    <Text> {this.props.btnText} </Text>
                </TouchableOpacity >;
                break;

        }
        return (

            <View style={styles.container} >
                { touchable}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    btn: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});

MyButton.propTypes = {
    btnText: PropTypes.string.isRequired,
};

export default MyButton;
