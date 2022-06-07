/*
    src/tabs/home/stacks/ratingInput.js
*/

import React, { useState, useRef, useEffect } from "react"
import { View, TouchableWithoutFeedback, TouchableOpacity, Text, StyleSheet, Animated } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import BottomNavigationOptions from "../../../components/bottomNavigationOptions"
import Slider from "react-native-slider"
import haptic from "../../../scripts/haptics"
import { setRating } from "../../../scripts/input"
import { screen, colors } from "../../../constants"

const HomeRatingsInputStack = ({ navigation, input, setInput, index, setIndex, defaults }) => {
    let [ratingLabel, setRatingLabel] = useState(input.ratings[index])

    const minimum = (index <= 5) ? -100 : 0
    const getOffset = (value) => {
        return 10 - 2.5 * screen.height + (100 * screen.width - 60 - 5 * screen.height) * (value - minimum) / (100 - minimum)
    }
    let sliderPosition = useRef(new Animated.Value(getOffset(input.ratings[index]))).current

    useEffect(() => {
        setRatingLabel(input.ratings[index])
        sliderPosition.setValue(getOffset(input.ratings[index]))
    }, [index])

    return (
        <StackContainer>
            <Title height={22.5 * screen.height} fontSize={9 * screen.width}>
                {
                    `${(index <= 5 ? "Impact On Your" : "The Importance Of")} ${["Finances", "Family", "Friends", "Community", "Health", "Happiness"][index % 6]}`
                }
            </Title>
            <TouchableWithoutFeedback onPress={(e) => {
                e.stopPropagation()
            }}>
                <View style={styles.inputSliderContainer}>
                    <Animated.View style={{
                        transform: [
                            {
                                translateX: sliderPosition
                            }
                        ]
                    }}>
                        <View style={styles.currentMarker}>
                            <Text style={styles.currentMarkerLabel}>
                                {
                                    ratingLabel
                                }
                            </Text>
                        </View>
                    </Animated.View>
                    <Slider style={styles.slider} value={input.ratings[index]} onValueChange={((sliderValue) => {
                        setRatingLabel(sliderValue)
                        sliderPosition.setValue(getOffset(sliderValue))
                    })} onSlidingComplete={(sliderValue) => {
                        haptic("impactMedium")
                        setRating(index, sliderValue, input, setInput, defaults)
                    }} step={1} minimumValue={minimum} maximumValue={100} thumbStyle={{ width: 20, height: 20 }} thumbTintColor={colors.extraLightPurple} minimumTrackTintColor={colors.lightPurple} maximumTrackTintColor={colors.lightPurple} />
                    <View style={styles.staticMarkersContainer}>
                        <TouchableOpacity activeOpacity={0.75} onPress={() => {
                            haptic("impactLight")
                            setRatingLabel(minimum)
                            setRating(index, minimum, input, setInput)
                            sliderPosition.setValue(getOffset(minimum))
                        }}>
                            <View style={styles.staticMarker}>
                                <Text style={styles.staticMarkerLabel}>
                                    {
                                        minimum
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.75} onPress={() => {
                            haptic("impactLight")
                            setRatingLabel(minimum / 2 + 50)
                            setRating(index, minimum / 2 + 50, input, setInput, defaults)
                            sliderPosition.setValue(getOffset(minimum / 2 + 50))
                        }}>
                            <View style={styles.staticMarker}>
                                <Text style={styles.staticMarkerLabel}>
                                    {
                                        minimum / 2 + 50
                                    }
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.75} onPress={() => {
                            haptic("impactLight")
                            setRatingLabel(100)
                            setRating(index, 100, input, setInput, defaults)
                            sliderPosition.setValue(getOffset(100))
                        }}>
                            <View style={styles.staticMarker}>
                                <Text style={styles.staticMarkerLabel}>100</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <BottomNavigationOptions helpLabel={"Help Determining Rating"} onHelp={() => {
                navigation.push("InputHelp", {
                    name: "Ratings",
                    index
                })
            }} onBack={() => {
                if(index > 0){
                    if(index == 6){
                        navigation.pop()
                    }
                    setIndex(index - 1)
                } else {
                    navigation.pop()
                }
            }} delayBack={index == 6} onNext={() => {
                if(index <= 10){
                    if(index == 5){
                        navigation.push("SectionGuide", { section: "Importance" })
                    } else {
                        setIndex(index + 1)
                    }
                } else {
                    navigation.push("Results")
                }
            }} delayNext={index == 5 || index == 11} />
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    inputSliderContainer: {
        width: 100 * screen.width - 40,
        height: 42 * screen.height,
        marginTop: 8 * screen.height
    },
    currentMarker: {
        position: "absolute",
        width: 10 * screen.height,
        height: 10 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5 * screen.height,
        borderBottomLeftRadius: 0,
        transform: [
            {
                rotateZ: "315deg"
            }
        ],
        backgroundColor: colors.extraDarkPurple
    },
    currentMarkerLabel: {
        transform: [
            {
                rotateZ: "45deg"
            }
        ],
        color: colors.lightPurple,
        fontFamily: "Comfortaa",
        fontWeight: "700",
        fontSize: 3 * screen.height,
    },
    slider: {
        width: 100 * screen.width - 40 - 5 * screen.height,
        alignSelf: "center",
        marginTop: 12.5 * screen.height
    },
    staticMarkersContainer: {
        width: "100%",
        height: 7.5 * screen.height,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 2.5 * screen.height
    },
    staticMarker: {
        width: 9 * screen.height,
        height: 8 * screen.height,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.3 * screen.height,
        borderColor: colors.extraDarkPurple,
        borderRadius: 2 * screen.height,
        backgroundColor: colors.mediumLightPurple
    },
    staticMarkerLabel: {
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 2.25 * screen.height
    },
    drawerContainer: {
        width: "100%",
        height: 66 * screen.height + Math.max(screen.bottom + 60, 80),
        marginTop: 4 * screen.height,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
        zIndex: 3
    },
    drawerTitleContainer: {
        width: "100%",
        height: 5.5 * screen.height + 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.extraDarkPurple
    },
    drawerTitleText: {
        color: colors.lightPurple,
        fontFamily: "Comfortaa",
        fontWeight: "700",
        fontSize:  28
    },
    drawerContentContainer: {
        width: "100%",
        height: 54.5 * screen.height + Math.max(screen.bottom + 60, 80) + 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: colors.darkPurple
    }
})

export default HomeRatingsInputStack