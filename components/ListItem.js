import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import MyButton from "./MyButton"

var x;
var y;

class Listitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: {
                latitude: this.props.data.latitude,
                longitude: this.props.data.longitude,
            }
        };
    }
    render() {

        return (
            <View style={styles.allContainer}>
                <Text style={styles.stationNameText}> {this.props.data.stationName} </Text>
                <View style={styles.dataContainer}>
                    <View style={{ width: 150 }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.navigate("Map", { marker: this.state.marker }) }}
                        >
                            <Text style={styles.dataTextSmall}> lat: {this.props.data.latitude} </Text>
                            <Text style={styles.dataTextSmall}> lng: {this.props.data.longitude} </Text>
                            <Text style={styles.dataTextSmall}> razem stacji: {this.props.data.totalDocks} </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 180 }}>
                        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'gray', maxHeight: 30 }}>
                            <Text style={{ ...styles.R, width: this.props.data.availableBikes / this.props.data.totalDocks * 180 }} >R</Text>
                            <Text style={styles.S}>S</Text>
                        </View>

                        {this.props.data.statusValue == 'In Service' ?
                            <Text style={styles.inService}>DOSTĘPNA</Text>
                            :
                            <Text style={styles.notInService}>W NAPRAWIE</Text>}
                    </View>

                </View>
                <MyButton btnText="Mapa" navTarget="Map" navigation={this.props.navigation} marker={this.state.marker} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    allContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 180,
        marginBottom: 30,
        padding: 5,
        borderWidth: 2,
    },
    stationNameText: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    dataContainer: {
        flexDirection: 'row',
        height: 110,
        justifyContent: 'center'
    },
    dataTextSmall: {
        fontSize: 11
    },
    R: {
        backgroundColor: '#222222',
        color: 'white',
        textAlign: 'center',

        flexWrap: 'wrap',
        fontSize: 15,
        lineHeight: 30
    },
    S: {
        backgroundColor: '#767676',
        color: 'white',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 15,
        lineHeight: 30
    },
    inService: {
        backgroundColor: '#006665',
        textAlign: 'center',
        color: 'white',
        height: 30,
        lineHeight: 30,
    },
    notInService: {
        backgroundColor: '#FD9D01',
        textAlign: 'center',
        color: 'white',
        lineHeight: 30,
        height: 30,
    },
});

export default Listitem;
