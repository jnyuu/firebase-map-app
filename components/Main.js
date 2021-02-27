import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator, Button } from 'react-native'; // okrągła animacja ładowania
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MyButton from "./MyButton"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontloaded: false
        };
    }

    componentDidMount = async () => {
        await Font.loadAsync({
            'roboto': require('../robotolight.ttf'),
        });
        this.setState({ fontloaded: true })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.fontloaded
                    ?
                    <View style={styles.halfColor}>
                        <Text style={{
                            fontFamily: 'roboto',
                            fontSize: 55
                        }}>Firebase App</Text>
                        <Text style={{
                            fontFamily: 'roboto',
                            fontSize: 15
                        }}>firebase authentication, firebase database</Text>
                    </View>
                    :
                    <View>
                        <Text>
                            No font
                        </Text>
                    </View>}
                <View style={styles.half}>
                    <MyButton btnText="Start" navTarget="LogIn" navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    halfColor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4630EB'
    },
    half: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Main;

