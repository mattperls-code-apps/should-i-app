/*
    src/components/drawerNavigationLinksColumn.js
*/

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import DrawerNavLink from "./drawerNavigationLink"
import { screen, colors } from "../constants"

const DrawerNavigationLinksColumn = ({ title, indexOffset, setIndex, closeDrawer }) => {
    const navigationLinks = []
    for(let i = 0;i<6;i++){
        navigationLinks.push(
            <DrawerNavLink key={i} itemIndex={i + indexOffset} setIndex={setIndex} closeDrawer={closeDrawer} />
        )
    }

    return (
        <View style={styles.drawerNavLinksColumnContainer}>
            <View style={styles.drawerNavigationLinksColumnTitleContainer}>
                <Text style={styles.drawerNavigationLinksColumnTitleText}>
                    {
                        title
                    }
                </Text>
            </View>
            {
                navigationLinks
            }
        </View>
    )
}

const styles = StyleSheet.create({
    drawerNavigationLinksColumnContainer: {
        width: 50 * screen.width - 15,
        height: "100%"
    },
    drawerNavigationLinksColumnTitleContainer: {
        width: "100%",
        height: 5.5 * screen.height,
        marginBottom: 2 * screen.height,
        alignItems: "center",
        justifyContent: "center"
    },
    drawerNavigationLinksColumnTitleText: {
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 6.5 * screen.width
    }
})

export default DrawerNavigationLinksColumn