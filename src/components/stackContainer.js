/*
    src/components/stackContainer.js
*/

import React from "react"
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native"
import NavigationPushContainer from "./navigationPushContainer"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import haptic from "../scripts/haptics"
import { screen, colors } from "../constants"

const StackContainer = ({ onPress, padTop, header, backgroundColor, navigation, children }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{ flex: 1 }}>
                {
                    header && (
                        <View style={styles.header}>
                            <View style={styles.backButtonBox}>
                                <NavigationPushContainer style={{ flex: 1 }} activeOpacity={0.75} onPress={() => {
                                    haptic("impactLight")
                                    navigation.goBack()
                                }}>
                                    <View style={styles.backButton}>
                                        <FontAwesomeIcon icon={faChevronLeft} color={colors.lightPurple} size={20}/>
                                        <Text style={styles.backLabel}>Back</Text>
                                    </View>
                                </NavigationPushContainer>
                            </View>
                        </View>
                    )
                }
                <View style={[styles.stackContainer, {
                    paddingTop: header ? 0 : padTop == null ? screen.top : 0,
                    backgroundColor: backgroundColor ? backgroundColor : colors.mediumPurple
                }]}>
                    {
                        children
                    }
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

const styles = StyleSheet.create({
    stackContainer: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        borderBottomColor: colors.extraDarkPurple,
        width: "100%",
        height: Math.max(60 + screen.top, 80),
        borderBottomWidth: 2,
        backgroundColor: colors.darkPurple
    },
    backButtonBox: {
        width: 120,
        height: "100%"
    },
    backButton: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: screen.top,
        paddingRight: 10
    },
    backLabel: {
        marginLeft: 6,
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 24
    }
})

export default StackContainer