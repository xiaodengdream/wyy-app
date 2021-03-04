import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import StartScreen from './src/screen/StartScreen'
import HomeScreen from './src/screen/HomeScreen'
import SearchScreen from './src/screen/SearchScreen'
import SongScreen from './src/screen/SongScreen'
import CommentScreen from './src/screen/CommentScreen'
import LoginScreen from './src/screen/LoginScreen'
import RegisterScreen from './src/screen/RegisterScreen'
import WelcomwScreen from './src/screen/Welcome'
import UserinfoScreen from './src/screen/UserinfoScreen'
import { View, Text, Button } from 'react-native';


const naivgations = createStackNavigator(
    {
        Start: { screen: StartScreen },
        Home: { screen: HomeScreen },
        Search: { screen: SearchScreen },
        Song: { screen: SongScreen },
        Comment: { screen: CommentScreen },
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen },
        Welcome: { screen: WelcomwScreen },
        Userinfo: { screen: UserinfoScreen }
    },
    { initialRouteName: 'Login' }
)

const Yy = createAppContainer(naivgations)
export default class App extends Component {

    render() {
        return (
            <Yy />
        )
    }
}