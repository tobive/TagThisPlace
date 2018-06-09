import React from 'react';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import MainHomeScreen from '../screens/MainHomeScreen';
import MainMapScreen from '../screens/MainMapScreen';
import MainSettingsScreen from '../screens/MainSettingsScreen';

const MainStack = TabNavigator(
    {
        Home: {
            screen: MainHomeScreen,
            navigationOptions: {
                headerBackTitle: ' ',
            },
        },
        Map: {
            screen: MainMapScreen,
            navigationOptions: {
                headerBackTitle: ' ',
            },
        },
        Settings: {
            screen: MainSettingsScreen,
            navigationOptions: {
                headerBackTitle: ' ',
            },
        }        
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-locate${focused ? '' : '-outline'}`;
                } else if (routeName === 'Map') {
                    iconName = `ios-pin${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-settings${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        // tabBarOptions: {
        //     activeTintColor: 'tomato',
        //     inactiveTintColor: 'grey',
        //     // Options for react-native-material-bottom-navigation
        //     bottomNavigationOptions: {
        //         labelColor: 'white',
        //         backgroundColor: 'red',
        //         rippleColor: 'red',
        //         // shifting: false,
        //         tabs: {
        //           Home: {
        //             barBackgroundColor: 'white',
        //             labelColor: 'blue',
        //             iconColor: 'blue'
        //           },
        //           Map: {
        //             barBackgroundColor: 'white',
        //             labelColor: 'blue'
        //           },
        //           Settings: {
        //             barBackgroundColor: 'white',
        //             labelColor: 'blue'
        //           }
        //         }
        //       }
        // },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            bottomNavigationOptions: {
              labelColor: 'white',
              backgroundColor: 'red',
              rippleColor: 'white',
              // shifting: false,
              tabs: {
                Home: {
                  barBackgroundColor: '#37474F',
                  labelColor: 'white',
                  iconColor: 'white'
                },
                Map: {
                  barBackgroundColor: '#37474F',
                  labelColor: 'white'
                },
                Settings: {
                  barBackgroundColor: '#37474F',
                  labelColor: 'white'
                }
              }
            }
          },
        tabBarComponent: NavigationComponent,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }

);

export default MainStack;
