/*
    src/components/title.js
*/

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { screen, colors } from "../constants"

const Title = ({ top, height, backgroundColor, bottomBorder, fontSize, children }) => {
    return (
        <View style={[styles.titleContainer, {
            paddingTop: top,
            height: (height || 0) + (top || 0),
            backgroundColor,
            shadowOpacity: bottomBorder ? 1 : 0
        }]}>
            <Text style={[styles.titleText, {
                fontSize,
                lineHeight: 1.4 * fontSize
            }]}>
                {
                    children
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowColor: colors.extraDarkPurple,
        shadowRadius: 0,
        zIndex: 2
    },
    titleText: {
        width: 100 * screen.width - 60,
        color: colors.extraLightPurple,
        fontFamily: "Comfortaa",
        fontWeight: "900",
        textAlign: "center"
    }
})

export default Title