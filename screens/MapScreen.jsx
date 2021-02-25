import React from 'react'
import { SafeAreaView } from "react-navigation"
import { Text, StyleSheet } from 'react-native'
function MapScreen({ navigation }) {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 50 }}>MapScreen</Text>
        </SafeAreaView>
    )
}

export default MapScreen
