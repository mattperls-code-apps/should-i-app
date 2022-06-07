/*
    src/components/staticInfo.js
*/

import React from "react"
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native"
import StackContainer from "./stackContainer"
import Title from "./title"
import { screen, colors } from "../constants"

const StaticInfo = ({ navigation, title, content }) => {
    return (
        <StackContainer header navigation={navigation}>
            <ScrollView style={styles.textContainer} contentContainerStyle={{ paddingTop: 2.5 * screen.height }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1}>
                    <Title height={20 * screen.height} fontSize={7.5 * screen.width}>
                        {
                            title
                        }
                    </Title>
                    <Text style={styles.text}>
                        {
                            content
                        }
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </StackContainer>
    )
}

const LegalInfo = ({ navigation, content }) => {
    return (
        <StackContainer header navigation={navigation}>
            <ScrollView style={styles.textContainer} contentContainerStyle={{ paddingTop: 2.5 * screen.height }} showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={1}>
                    {
                        content
                    }
                </TouchableOpacity>
            </ScrollView>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        width: 100 * screen.width - 40,
        alignSelf: "center"
    },
    text: {
        width: 100 * screen.width - 60,
        alignSelf: "center",
        marginBottom: 30,
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 20
    }
})

export default StaticInfo
export { LegalInfo }