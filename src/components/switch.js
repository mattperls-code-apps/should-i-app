/*
    src/components/switch.js
*/

import React, { useState } from "react"
import { View, TouchableWithoutFeedback, StyleSheet, Animated } from "react-native"
import haptic from "../scripts/haptics"
import { colors } from "../constants"

const Switch = ({ valueState, markerOffset, onValueChange }) => {
    const [value, setValue] = valueState

    let [isAnimating, setIsAnimating] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={() => {
            if(!isAnimating){
                onValueChange(!value)
                setIsAnimating(true)
                setValue(!value)
                haptic("impactMedium")
                Animated.timing(markerOffset, {
                    toValue: value ? 0 : 25,
                    duration: 150,
                    useNativeDriver: true
                }).start(() => {
                    setIsAnimating(false)
                })
            }
        }}>
            <View style={[styles.switchContainer, {
                backgroundColor: value ? colors.lightPurple : colors.mediumLightPurple
            }]}>
                <Animated.View style={[styles.valueMarker, {
                    transform: [
                        {
                            translateX: markerOffset
                        }
                    ],
                    backgroundColor: value ? colors.mediumLightPurple : colors.mediumPurple
                }]} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    switchContainer: {
        width: 60,
        height: 35,
        borderRadius: 17.5
    },
    valueMarker: {
        marginTop: 2.5,
        marginLeft: 2.5,
        width: 30,
        height: 30,
        borderRadius: 15
    }
})

export default Switch