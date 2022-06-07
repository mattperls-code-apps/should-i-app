/*
    src/tabs/home/stacks/default.js
*/

import React, { useRef } from "react"
import { View, StyleSheet, Animated } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import { RegularButton } from "../../../components/buttons"
import ShouldIGuy from "../../../assets/images/should-i-guy.svg.js"
import { isActive, defaultValue } from "../../../scripts/input"
import { screen } from "../../../constants"

const HomeDefaultStack = ({ navigation, input, setInput, defaults, setDefaults }) => {
    let logoOpacity = useRef(new Animated.Value(1)).current
    const fadeOut = () => {
        Animated.timing(logoOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start(() => {
            navigation.push("SectionGuide", { section: "Question" })
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
                {
                    isActive(input, defaults) ? (
                        <React.Fragment>
                            <RegularButton onPress={() => {
                                fadeOut()
                            }}>Continue</RegularButton>
                            <RegularButton onPress={() => {
                                defaultValue((storedDefaults) => {
                                    setInput(storedDefaults)
                                    setDefaults(storedDefaults)
                                    fadeOut()
                                })
                            }}>New Question</RegularButton>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <RegularButton onPress={() => {
                                defaultValue((storedDefaults) => {
                                    setInput(storedDefaults)
                                    setDefaults(storedDefaults)
                                    fadeOut()
                                })
                            }}>New Question</RegularButton>
                            <RegularButton onPress={() => {
                                navigation.push("GettingStarted")
                            }}>Getting Started</RegularButton>
                        </React.Fragment>
                    )
                }
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
    buttonsContainer: {
        width: "100%",
        height: 30 * screen.height,
        justifyContent: "space-evenly"
    }
})

export default HomeDefaultStack