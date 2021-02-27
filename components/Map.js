import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: this.props.route.params.marker.latitude,
                    longitude: this.props.route.params.marker.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.001,
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: this.props.route.params.marker.latitude,
                        longitude: this.props.route.params.marker.longitude,
                    }}
                />
            </MapView>
        );
    }
}

export default Map;
