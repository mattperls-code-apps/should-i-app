/*
    src/components/drawerNavigationLink.js
*/

import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import haptic from "../scripts/haptics"
import { screen, colors } from "../constants"

const DrawerNavigationLink = ({ itemIndex, setIndex, closeDrawer }) => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={() => {
            haptic("impactLight")
            setIndex(itemIndex)
            closeDrawer()
        }}>
            <View style={styles.drawerNavigationLinkContainer}>
                <Text style={styles.drawerNavigationLinkText}>
                    {
                        ["Finances", "Family", "Friends", "Community", "Health", "Happiness"][itemIndex % 6]
                    }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    drawerNavigationLinkContainer: {
        width: 45 * screen.width - 15,
        height: 8 * screen.height,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 1 * screen.height,
        borderRadius: 2.5 * screen.height,
        borderWidth: 2,
        borderColor: colors.extraDarkPurple,
        backgroundColor: colors.mediumLightPurple
    },
    drawerNavigationLinkText: {
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 2.75 * screen.height
    }
})

export default DrawerNavigationLink