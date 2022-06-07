/*
    src/components/preference.js
*/

import React, { useState, useEffect, useRef } from "react"
import { View, Text, Animated, StyleSheet } from "react-native"
import Slider from "react-native-slider"
import { WideButton } from "../components/buttons"
import haptic from "../scripts/haptics"
import { setKey } from "../scripts/storage"
import { screen, colors } from "../constants"

const Preference = ({ label, preferences, setPreferences, name, navigation, helpStackIndex }) => {
    let [importance, setImportance] = useState(0)

    const getOffset = (value) => {
        return 10 + (100 * screen.width - 60 - 7.5 * screen.height) * value / 100
    }
    let sliderPosition = useRef(new Animated.Value(getOffset(preferences[name]))).current

    useEffect(() => {
        setImportance(preferences[name])
        sliderPosition.setValue(getOffset(preferences[name]))
    }, [])

    return (
        <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceLabel}>
                {
                    label
                }
            </Text>
            <View style={styles.inputSliderContainer}>
                <Animated.View style={{
                    transform: [
                        {
                            translateX: sliderPosition
                        }
                    ]
                }}>
                    <View style={styles.currentMarker}>
                        <Text style={styles.currentMarkerLabel}>
                            {
                                importance
                            }
                        </Text>
                    </View>
                </Animated.View>
                <Slider style={styles.slider} value={importance} onValueChange={(value) => {
                    setImportance(value)
                    sliderPosition.setValue(getOffset(value))
                }} onSlidingComplete={(value) => {
                    haptic("impactMedium")
                    let updatedPreferences = {...preferences}
                    updatedPreferences[name] = value
                    setKey("preferences", updatedPreferences, () => {
                        setPreferences(updatedPreferences)
                    })
                }} step={1} minimumValue={0} maximumValue={100} thumbStyle={{ width: 20, height: 20 }} thumbTintColor={colors.extraLightPurple} minimumTrackTintColor={colors.lightPurple} maximumTrackTintColor={colors.lightPurple} />
            </View>
            <WideButton onPress={() => {
                navigation.push("PreferenceHelp", {
                    index: helpStackIndex
                })
            }}>Help Rating Importance</WideButton>
        </View>
    )
}

const styles = StyleSheet.create({
    preferenceContainer: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20
    },
    preferenceLabel: {
        width: "100%",
        paddingVertical: 15,
        paddingLeft: 10,
        backgroundColor: colors.extraDarkPurple,
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontSize: 5 * screen.width
    },
    inputSliderContainer: {
        width: 100 * screen.width - 40,
        paddingTop: 20,
        paddingBottom: 10,
    },
    currentMarker: {
        position: "absolute",
        width: 7.5 * screen.height,
        height: 7.5 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3.75 * screen.height,
        borderBottomLeftRadius: 0,
        transform: [
            {
                rotateZ: "315deg"
            }
        ],
        backgroundColor: colors.extraDarkPurple
    },
    currentMarkerLabel: {
        transform: [
            {
                rotateZ: "45deg"
            }
        ],
        color: colors.lightPurple,
        fontFamily: "Comfortaa",
        fontWeight: "700",
        fontSize: 2.5 * screen.height,
    },
    slider: {
        width: 100 * screen.width - 40 - 7.5 * screen.height,
        alignSelf: "center",
        marginTop: 10 * screen.height
    }
})

export default Preference