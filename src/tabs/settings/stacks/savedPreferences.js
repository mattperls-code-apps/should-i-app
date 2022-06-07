/*
    src/tabs/settings/stacks/savedPreferences.js
*/

import React from "react"
import { View, ScrollView, TouchableWithoutFeedback } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import Preference from "../../../components/preference"
import { screen } from "../../../constants"

const SettingsSavedPreferencesStack = ({ navigation, preferences, setPreferences }) => {
    return (
        <StackContainer header navigation={navigation}>
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback>
                    <View>
                        <Title height={17.5 * screen.height} fontSize={7.5 * screen.width}>Saved Preferences</Title>
                        <Preference label={"Importance of Finances"} preferences={preferences} setPreferences={setPreferences} name={"finances"} navigation={navigation} helpStackIndex={6} />
                        <Preference label={"Importance of Family"} preferences={preferences} setPreferences={setPreferences} name={"family"} navigation={navigation} helpStackIndex={7} />
                        <Preference label={"Importance of Friends"} preferences={preferences} setPreferences={setPreferences} name={"friends"} navigation={navigation} helpStackIndex={8} />
                        <Preference label={"Importance of Community"} preferences={preferences} setPreferences={setPreferences} name={"community"} navigation={navigation} helpStackIndex={9} />
                        <Preference label={"Importance of Health"} preferences={preferences} setPreferences={setPreferences} name={"health"} navigation={navigation} helpStackIndex={10} />
                        <Preference label={"Importance of Happiness"} preferences={preferences} setPreferences={setPreferences} name={"happiness"} navigation={navigation} helpStackIndex={11} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </StackContainer>
    )
}

export default SettingsSavedPreferencesStack