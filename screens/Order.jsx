import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"
import MapScreen from "./MapScreen.jsx"
import MapListScreen from "./MapList.jsx"
import { setNavigator } from "./navigation.jsx"


const switchNavigator = createSwitchNavigator({
    mainFlow: createBottomTabNavigator({
        MapView: MapScreen,
        MapList: MapListScreen
    })
})


const Order = createAppContainer(switchNavigator)
export default () => {
    return (
        <Order ref={navigator => {
            setNavigator(navigator)
        }}
        />
    )
}


