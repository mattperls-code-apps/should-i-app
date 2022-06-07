/*
    src/tabs/start/index.js
*/

import React, { useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Default from "./stacks/default"
import Sign from "./stacks/sign"
import { hasMostRecentTermsAndConditions } from "../../scripts/storage"
import SplashScreen from "react-native-splash-screen"

const Start = ({ navigation }) => {
    useEffect(() => {
        hasMostRecentTermsAndConditions((isValid) => {
            if(isValid){
                navigation.navigate("Home")
            }
            SplashScreen.hide()
        })
    }, [])

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Default"} screenOptions={{
            gestureResponseDistance: 20,
            headerShown: false
        }}>
            <Stack.Screen name={"Default"} component={Default} />
            <Stack.Screen name={"Sign"} component={Sign} />
        </Stack.Navigator>
    )
}

export default Start