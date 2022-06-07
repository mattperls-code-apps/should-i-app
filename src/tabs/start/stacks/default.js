/*  src/tabs/start/stacks/default.js  */

import React, { useRef} from "react"
import { View, Text, StyleSheet, Animated } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import { RegularButton } from "../../../components/buttons"
import ShouldIGuy from "../../../assets/images/should-i-guy.svg.js"
import { colors, screen } from "../../../constants"

const Default = ({ navigation }) => {
    let logoOpacity = useRef(new Animated.Value(1)).current
    const fadeOut = () => {
        Animated.timing(logoOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start(() => {
            navigation.push("Sign")
            setTimeout(() => {
                logoOpacity.setValue(1)
            }, 500)
        })
    }

    return (
        <StackContainer>
            <Title top={2.5 * screen.height} height={20 * screen.height} fontSize={12.5 * screen.width}>Should I?</Title>
            <Animated.View style={[styles.logoContainer, {
                opacity: logoOpacity
            }]}>
                <ShouldIGuy />
            </Animated.View>
            <View style={styles.buttonsContainer}>
                <Text style={styles.label}>We can help you weigh your decisions</Text>
                <RegularButton onPress={fadeOut}>Continue</RegularButton>
            </View>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        width: 85 * screen.width,
        height: 50 * screen.height,
        alignSelf: "center",
        marginVertical: -5 * screen.height
    },
    label: {
        color: colors.lightPurple,
        fontFamily: "Comfortaa",
        fontSize: 5 * screen.width,
        marginHorizontal: 15 * screen.width,
        textAlign: "center"
    },
    buttonsContainer: {
        width: "100%",
        height: 30 * screen.height,
        justifyContent: "space-evenly"
    }
})

export default Default