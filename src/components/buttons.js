/*
    src/components/buttons.js
*/

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import NavigationPushContainer from "./navigationPushContainer"
import haptic from "../scripts/haptics"
import { screen, colors } from "../constants"

const RegularButton = ({ children, noDelay, onPress, marginVertical }) => {
    return (
        <View style={[styles.regularButtonWrapper, {
            marginVertical: marginVertical || 1.25 * screen.height
        }]}>
            <NavigationPushContainer delay={noDelay ? 0 : null} activeOpacity={0.75} onPress={() => {
                haptic("impactLight")
                onPress()
            }}>
                <View style={styles.regularButtonContainer}>
                    <Text style={styles.buttonText}>
                        {
                            children
                        }
                    </Text>
                </View>
            </NavigationPushContainer>
        </View>
    )
}

const WideButton = ({ children, onPress, marginTop }) => {
    return (
        <NavigationPushContainer activeOpacity={0.75} onPress={() => {
            haptic("impactLight")
            onPress()
        }}> 
            <View style={[styles.wideButtonContainer, {
                marginTop
            }]}>
                <Text style={styles.buttonText}>
                    {
                        children
                    }
                </Text>
            </View>
        </NavigationPushContainer>
    )
}

const SplitButton = ({ leftLabel, onLeftPress, delayLeftPress, rightLabel, onRightPress, delayRightPress }) => {
    return (
        <View style={styles.splitButtonsContainer}>
            <NavigationPushContainer delay={delayLeftPress ? 500 : 0} activeOpacity={0.75} onPress={() => {
                haptic("impactLight")
                onLeftPress()
            }}>
                <View style={[styles.splitButtonContainer, {
                    borderTopLeftRadius: 3.1 * screen.height,
                    borderBottomLeftRadius: 3.1 * screen.height
                }]}>
                    <Text style={styles.buttonText}>
                        {
                            leftLabel
                        }
                    </Text>
                </View>
            </NavigationPushContainer>
            <NavigationPushContainer delay={delayRightPress ? 500 : 0} activeOpacity={0.75} onPress={() => {
                haptic("impactLight")
                onRightPress()
            }}>
                <View style={[styles.splitButtonContainer, {
                    borderTopRightRadius: 3.1 * screen.height,
                    borderBottomRightRadius: 3.1 * screen.height
                }]}>
                    <Text style={styles.buttonText}>
                        {
                            rightLabel
                        }
                    </Text>
                </View>
            </NavigationPushContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    regularButtonWrapper: {
        width: 55 * screen.width,
        height: 9.7 * screen.height,
        alignSelf: "center"
    },
    regularButtonContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.4 * screen.height,
        borderColor: colors.darkPurple,
        borderRadius: 3.5 * screen.height,
        backgroundColor: colors.mediumLightPurple
    },
    wideButtonContainer: {
        width: 99.2 * screen.width - 40,
        height: 11.8 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.4 * screen.height,
        borderColor: colors.darkPurple,
        borderRadius: 3.5 * screen.height,
        backgroundColor: colors.mediumLightPurple
    },
    splitButtonsContainer: {
        overflow: "hidden",
        width: 100 * screen.width - 40,
        height: 10.5 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 1.5 * screen.height,
        borderRadius: 3.5 * screen.height,
        backgroundColor: colors.darkPurple
    },
    splitButtonContainer: {
        width: 50 * screen.width - 1.6 / 3 * screen.height - 20,
        height: 9.7 * screen.height,
        marginHorizontal: 0.2 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.mediumLightPurple
    },
    buttonText: {
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 5.25 * screen.width,
        textAlign: "center"
    }
})

export {
    RegularButton,
    WideButton,
    SplitButton
}