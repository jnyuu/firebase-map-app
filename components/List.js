import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

import firebase from "firebase"
import ListItem from "./ListItem"
import MyButton from "./MyButton"
// import firebase from "firebase"
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
        this.stations = this.getFirebase().child("stations_big") // "stations" to nazwa tablicy w obiekcie jsona
        this.user = firebase.auth().currentUser
    }

    getFirebase() {
        return firebase.database().ref()
    }
    componentDidMount() {
        this.stations.on("value", (elements) => {
            console.log(elements)
            var tempTab = [];
            elements.forEach((item) => {
                var tempObj = {
                    stationName: item.val().stationName,
                    latitude: item.val().latitude,
                    longitude: item.val().longitude,
                    totalDocks: item.val().totalDocks,
                    statusValue: item.val().statusValue,
                    availableDocks: item.val().availableDocks,
                    availableBikes: item.val().availableBikes
                }
                tempTab.push(tempObj)
            })
            this.setState({
                data: tempTab,
                loaded: true,
            })
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                {this.state.loaded == false ?
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#00ff00" />
                    </View>
                    :
                    <View style={styles.allContainer}>
                        <View style={styles.userName}>
                            <Text style={{ color: "red" }}>Witaj : {this.user.email}</Text>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <MyButton btnText="Main Page" navTarget="Main" navigation={this.props.navigation} pressAction1={this.firebaseLogin} />
                            <MyButton btnText="Logout" navigation={this.props.navigation} userName={this.user.email} />
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={item => item.id}
                                renderItem={({ item, i }) =>
                                    <ListItem
                                        navigation={this.props.navigation}
                                        data={item}
                                    />} />
                        </View>
                    </View>
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    allContainer: {
        flex: 1,
        flexDirection: "column",
    },
    userName: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: "row",
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: "row",
    },
    listContainer: {
        flex: 10,
        flexDirection: "column",
        alignItems: 'stretch',
        justifyContent: 'center',
        alignContent: 'stretch',
    },

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
export default List;
