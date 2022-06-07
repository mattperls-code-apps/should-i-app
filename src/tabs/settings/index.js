/*
    src/tabs/settings/index.js
*/

import React, { useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Default from "./stacks/default"
import SavedPreferences from "./stacks/savedPreferences"
import PreferenceHelp from "./stacks/preferenceHelp"
import TermsAndConditions from "./stacks/termsAndConditions"
import PrivacyPolicy from "./stacks/privacyPolicy"
import haptic from "../../scripts/haptics"
import { getKey } from "../../scripts/storage"

const Settings = ({ navigation }) => {
    let [preferences, setPreferences] = useState({})

    useEffect(() => {
        getKey("preferences", (storedPreferences) => {
            setPreferences(storedPreferences)
        })

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
            <Stack.Screen name={"SavedPreferences"}>
                {
                    ({ navigation }) => <SavedPreferences navigation={navigation} preferences={preferences} setPreferences={setPreferences} />
                }
            </Stack.Screen>
            <Stack.Screen name={"PreferenceHelp"} component={PreferenceHelp} />
            <Stack.Screen name={"TermsAndConditions"} component={TermsAndConditions} />
            <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicy} />
        </Stack.Navigator>
    )
}

export default Settings