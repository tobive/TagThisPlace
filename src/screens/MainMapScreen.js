import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

class MainMapScreen extends Component {
    state = {
        latitude: 0.0,
        longitude: 0.0,
        errorMessage: null
    }

    componentWillMount() {
        if(Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Try it on device'
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permissions to access location was denied'
            });
        } else {            
            Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            })
            .then(res => {
                alert(JSON.stringify(res));
                const { coords: { latitude, longitude } } = res;
                this.setState({ latitude, longitude });
            })
            .catch(err => {
                alert('ERR ' + err);
            })
        }
    }

    render() {
        if ((this.state.latitude === 0)&&(this.state.longitude === 0)) {
            return false;
        }
        
        return (
            <MapView
                style={styles.container}
                initialRegion={{
                    latitude: this.state.latitude,
                    longitude: this.state.longitude,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021
                }}
            >
                <MapView.Marker
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
                    }}
                    title={"Home"}
                    description={"first mark"}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MainMapScreen;
