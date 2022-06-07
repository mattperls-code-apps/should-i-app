/*
    src/tabs/history/index.js
*/

import React, { useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import haptic from "../../scripts/haptics"
import Default from "./stacks/default"
import MoreInfo from "./stacks/moreInfo"

const History = ({ navigation }) => {
    useEffect(() => {
        const subscriber = navigation.addListener("tabPress", () => {
            haptic("impactLight")
        })

        return subscriber
    }, [])

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName={"Default"} screenOptions={{
            gestureResponseDistance: 20,
            headerShown: false
        }}>
            <Stack.Screen name={"Default"} component={Default} />
            <Stack.Screen name={"MoreInfo"} component={MoreInfo} />
        </Stack.Navigator>
    )
}

export default History