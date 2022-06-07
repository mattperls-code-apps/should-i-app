/*
    src/components/settingInfo.js
*/

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import NavigationPushContainer from "./navigationPushContainer"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import haptic from "../scripts/haptics"
import { screen, colors } from "../constants"

const SettingsInfo = ({ label, stackName, navigation, onClick }) => {
    return (
        <NavigationPushContainer activeOpacity={0.75} onPress={() => {
            haptic("impactLight")
            if(typeof onClick == "function"){
                onClick()
            } else {
                navigation.push(stackName)
            }
        }}>
            <View style={styles.settingsInfoContainer}>
                <Text style={styles.settingsInfoLabel}>
                    {
                        label
                    }
                </Text>
                <FontAwesomeIcon icon={faChevronRight} color={colors.lightPurple} size={25} />
            </View>
        </NavigationPushContainer>
    )
}

const styles = StyleSheet.create({
    settingsInfoContainer: {
        width: 100 * screen.width,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 1,
        backgroundColor: colors.mediumPurple
    },
    settingsInfoLabel: {
        width: 100 * screen.width - 120,
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 4.75 * screen.width
    },
    settingInfoButtonContainer: {
        padding: 12.5,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SettingsInfo