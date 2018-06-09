import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import * as Actions from '../actions';

class MainHomeContainer extends Component {
    // state = {
    //     latitude: 0.0,
    //     longitude: 0.0,
    //     errorMessage: null
    // }

    // componentWillMount() {
    //     if(Platform.OS === 'android' && !Constants.isDevice) {
    //         this.setState({
    //             errorMessage: 'Try it on device'
    //         });
    //     } else {
    //         this._getLocationAsync();
    //     }
    // }

    // _getLocationAsync = async () => {
    //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //     if(status !== 'granted') {
    //         this.setState({
    //             errorMessage: 'Permissions to access location was denied'
    //         });
    //     } else {
    //         Location.getCurrentPositionAsync({
    //             enableHighAccuracy: true
    //         })
    //         .then(res => {
    //             alert(JSON.stringify(res));
    //             const { coords: { latitude, longitude } } = res;
    //             this.setState({latitude, longitude});
    //         })
    //         .catch(err => {
    //             alert(err);
    //         });
    //     }
    // }

    addNewTag = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted') {
            alert('Permissions to access location was denied');
        } else {
            Location.getCurrentPositionAsync({
                enableHighAccuracy: true
            })
            .then(res => {
                // alert(JSON.stringify(res));
                this.props.actions.addNewTag(res);
            })
            .catch(err => {
                alert(err);
            });
        }        
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.addNewTag}
                    title="TAG !"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    button: {

    },
});

// function mapStateToProps(state) {
//     return {

//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(MainHomeContainer);