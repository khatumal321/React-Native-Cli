import React from 'react';
import {Text} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signup from './../../cantainer/signup/Signup'
import Home from './../../cantainer/Home/Home'
import Login from './../../cantainer/Login/Login'

import { createDrawerNavigator } from 'react-navigation-drawer';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Home,
        // navigationOptions : {
        //     drawerIcon: <Text>gjniuuijge</Text>
        // }
    },

});

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: { header: null }

    },
    Signup: {
        screen: Signup,
        navigationOptions: { header: null }

    },
    Home: {
        screen: MyDrawerNavigator,
        navigationOptions: { header: null }
    },

});

export default createAppContainer(AppNavigator)