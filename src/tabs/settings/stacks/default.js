/*
    src/tabs/settings/stacks/default.js
*/

import React from "react"
import { View, TouchableWithoutFeedback, ScrollView, Text, StyleSheet, Linking } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import SettingToggle from "../../../components/settingToggle"
import SettingInfo from "../../../components/settingInfo"
import { screen, colors } from "../../../constants"

const SettingsDefaultStack = ({ navigation }) => {
    return (
        <StackContainer padTop={0} backgroundColor={colors.mediumLightPurple}>
            <Title top={screen.top} height={12.5 * screen.height} fontSize={9 * screen.width} backgroundColor={colors.darkPurple}>Settings</Title>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback>
                    <View style={{ alignItems: "center" }}>
                        <View style={styles.groupNameContainer}>
                            <Text style={styles.groupNameLabel}>Customization</Text>
                        </View>
                        <SettingToggle label={"Automatically Save Results"} storageKey={"automaticallySaveResults"} />
                        <SettingToggle label={"Use Saved Preferences"} storageKey={"useSavedPreferences"} />
                        <SettingInfo label={"Saved Preferences"} stackName={"SavedPreferences"} navigation={navigation} />
                        <View style={styles.groupNameContainer}>
                            <Text style={styles.groupNameLabel}>About</Text>
                        </View>
                        <SettingInfo label={"Terms And Conditions"} stackName={"TermsAndConditions"} navigation={navigation} />
                        <SettingInfo label={"Privacy Policy"} stackName={"PrivacyPolicy"} navigation={navigation} />
                        <SettingInfo label={"Contact Us"} onClick={() => {
                            Linking.openURL("mailto:should-i.app.help@gmail.com")
                        }} />
                        <Text style={styles.versionLabel}>v1.0.00</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    groupNameContainer: {
        marginTop: 25,
        marginBottom: 15
    },
    groupNameLabel: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 20,
        fontWeight: "400",
        color: colors.lightPurple
    },
    versionLabel: {
        width: "100%",
        marginLeft: 10,
        marginVertical: 5,
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "500"
    }
})

export default SettingsDefaultStack