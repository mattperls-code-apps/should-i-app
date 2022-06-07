/*
    src/components/expandableInfoBar.js
*/

import React, { useState } from "react"
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import haptic from "../scripts/haptics"
import { screen, colors } from "../constants"

const ExpandableInfoBar = ({ label, info, centerInfo }) => {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <View style={{ marginBottom: 5 }}>
            <TouchableOpacity activeOpacity={0.75} onPress={() => {
                haptic("impactLight")
                setIsOpen(!isOpen)
            }}>
                <View style={styles.infoBarContainer}>
                    <Text style={styles.infoBarText}>
                        {
                            (isOpen ? "Hide" : "Show") + " " + label
                        }
                    </Text>
                    <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} color={colors.extraLightPurple} size={5.5 * screen.width} />
                </View>
            </TouchableOpacity>
            {
                isOpen && (
                    <TouchableWithoutFeedback>
                        <View style={styles.expandableInfoContainer}>
                            <Text style={[styles.expandableInfoText, {
                                textAlign: centerInfo ? "center" : "left"
                            }]}>
                                {
                                    info
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    infoBarContainer: {
        width: "100%",
        height: 9 * screen.height,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.extraDarkPurple
    },
    infoBarText: {
        marginRight: 10,
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 6 * screen.width
    },
    expandableInfoContainer: {
        padding: 20,
        borderTopColor: colors.mediumLightPurple,
        backgroundColor: colors.darkPurple
    },
    expandableInfoText: {
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 4.75 * screen.width
    }
})

export default ExpandableInfoBar