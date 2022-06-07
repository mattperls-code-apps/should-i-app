/*
    src/components/settingToggle.js
*/

import React, { useState, useRef, useEffect } from "react"
import { View, TouchableWithoutFeedback, Text, StyleSheet, Animated } from "react-native"
import Switch from "./switch"
import { getKey, setKey } from "../scripts/storage"
import { screen, colors } from "../constants"

const SettingsToggle = ({ label, storageKey }) => {
    let [optionValue, setOptionValue] = useState(false)

    let markerOffset = useRef(new Animated.Value(0)).current

    useEffect(() => {
        getKey(storageKey, (value) => {
            setOptionValue(value)
            markerOffset.setValue(value ? 25 : 0)
        })
    }, [])

    return (
        <TouchableWithoutFeedback>
            <View style={styles.settingsToggleContainer}>
                <Text style={styles.settingsToggleLabel}>
                    {
                        label
                    }
                </Text>
                <Switch valueState={[optionValue, setOptionValue]} markerOffset={markerOffset} onValueChange={(value) => {
                    setKey(storageKey, value)
                }} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    settingsToggleContainer: {
        width: 100 * screen.width,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 1,
        backgroundColor: colors.mediumPurple
    },
    settingsToggleLabel: {
        width: 100 * screen.width - 120,
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 4.75 * screen.width
    }
})

export default SettingsToggle