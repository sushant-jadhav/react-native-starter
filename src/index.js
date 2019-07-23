/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';


import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomePage from './pages/homePage';
import MoviePage from './pages/moviePage';
import ProductPage from './pages/productPage';
import SettingPage from './pages/settingPage';
import OfferPage from './pages/offerPage';

const myIcon1 = <Icon name="home" size={20} color={'#d3d3d3'} />;
const myIcon2 = <Icon name="video" size={20} color={'#d3d3d3'} />;
const myIcon3 = <Icon name="bell" size={20} color={'#d3d3d3'} />;
const myIcon4 = <Icon name="cog" size={20} color={'#d3d3d3'} />;

const TabNavigator =  createMaterialBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: ({ navigation }) => ({
            title: "Near You",
            tabBarIcon: ({ tintColor }) => myIcon1,
            tabBarColor:'#900'
        })
    },
    Movie: {
        screen: ProductPage,
        navigationOptions: ({ navigation }) => ({
            title: "Products",
            tabBarIcon: ({ tintColor }) => myIcon2,
            tabBarColor:'#800080'
        })
    },
    Offer: {
        screen: OfferPage,
        navigationOptions: ({ navigation }) => ({
            title: "Offers",
            tabBarIcon: ({ tintColor }) => myIcon3,
            tabBarColor:'#FF1493'
        })
    },
    Settings : {
        screen: SettingPage,
        navigationOptions: ({ navigation }) => ({
            title: "Settings",
            tabBarIcon: ({ tintColor }) => myIcon4,
            tabBarColor:'#ff0000'
        })},
}, {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#ff0000',
    labeled:true,
    barStyle: { backgroundColor: '#900' },
});

export default createAppContainer(TabNavigator);