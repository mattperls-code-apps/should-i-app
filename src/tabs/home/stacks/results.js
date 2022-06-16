/*
    src/tabs/home/stacks/results.js
*/

import React, { useState, useRef, useEffect } from "react"
import { View, TouchableWithoutFeedback, ScrollView, Text, StyleSheet } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import BarChart from "../../../components/barChart"
import ExpandableInfoBar from "../../../components/expandableInfoBar"
import { WideButton, SplitButton } from "../../../components/buttons"
import ViewShot, { captureRef } from "react-native-view-shot"
import generateOutput from "../../../scripts/output"
import { getKey, setKey } from "../../../scripts/storage"
import Share from "react-native-share"
import { screen, colors } from "../../../constants"

const HomeResultsStack = ({ navigation, input }) => {
    let [hasSaved, setHasSaved] = useState(false)

    let resultsDisplay = useRef()

    let [output] = useState(generateOutput(input))

    useEffect(() => {
        if(!hasSaved){
            getKey("automaticallySaveResults", (automaticallySaveResults) => {
                if(automaticallySaveResults){
                    setHasSaved(true)
                    getKey("resultsHistory", (resultsHistory) => {
                        const updatedResultsHistory = [...resultsHistory, {
                            id: Date.now(),
                            input,
                            output
                        }]
                        setKey("resultsHistory", updatedResultsHistory)
                    })
                }
            })
        }
    }, [hasSaved])

    return (
        <StackContainer padTop={0} backgroundColor={colors.mediumPurple}>
            <Title top={screen.top} height={12.5 * screen.height} backgroundColor={colors.darkPurple} fontSize={9 * screen.width} bottomBorder>Your Results</Title>
            <ScrollView style={{ width: "100%" }} showsVerticalScrollIndicator={false}>
                <TouchableWithoutFeedback>
                    <View style={{ flex: 1, paddingBottom: 5 }}>
                        <ViewShot ref={resultsDisplay} style={{ backgroundColor: colors.mediumPurple }}>
                            <Text numberOfLines={2} style={styles.questionText}>
                                {
                                    input.question.length == 0 ? "(No Question Provided)" : "\"" + input.question + "\""
                                }
                            </Text>
                            <Text style={[styles.resultText, {
                                color: Math.round(output.score) < 0 ? colors.red : Math.round(output.score) == 0 ? colors.grey : colors.green
                            }]}>
                                {
                                    Math.round(output.score) < 0 ? "You Should Not Do It!" : Math.round(output.score) == 0 ? "We Are Unsure If You Should Do It Or Not" : "You Should Do It!"
                                }
                            </Text>
                            <BarChart data={
                                (() => {
                                    const chartValues = []
                                    for(let i = 0;i<6;i++){
                                        chartValues.push(input.ratings[i] * input.ratings[i + 6] / 100)
                                    }
                                    return chartValues
                                })()
                            }/>
                        </ViewShot>
                        <Text style={styles.explanation}>
                            {
                                output.analysis.score.intro + "\n\n" + output.analysis.score.analysis
                            }
                        </Text>
                        <ExpandableInfoBar label={"Impact Analysis"} info={output.analysis.impact} />
                        <ExpandableInfoBar label={"Importance Analysis"} info={output.analysis.importance} />
                        <View style={{ alignItems: "center", marginVertical: 15 }}>
                            <WideButton onPress={() => {
                                captureRef(resultsDisplay, {
                                    format: "jpg",
                                    quality: 1
                                }).then((uri) => {
                                    try {
                                        Share.shareSingle({
                                            backgroundImage: uri,
                                            social: Share.Social.INSTAGRAM_STORIES
                                        })
                                    } catch(error){
                                        if(error){
                                            console.warn(error)
                                        }
                                    }
                                })
                            }}>Create Instagram Story</WideButton>
                            <WideButton onPress={() => {
                                captureRef(resultsDisplay, {
                                    format: "jpg",
                                    quality: 1
                                }).then((uri) => {
                                    try {
                                        Share.open({
                                            url: uri
                                        })
                                    } catch (error) {
                                        if(error){
                                            console.warn(error)
                                        }
                                    }
                                })
                            }} marginTop={10}>Share Your Results</WideButton>
                            {
                                hasSaved ? (
                                    <View style={styles.savedMessageContainer}>
                                        <Text style={styles.savedMessageText}>Results Have Been{"\n"}Saved To History</Text>
                                    </View>
                                ) : (
                                    <WideButton onPress={() => {
                                        setHasSaved(true)
                                        getKey("resultsHistory", (resultsHistory) => {
                                            const updatedResultsHistory = [...resultsHistory, {
                                                id: Date.now(),
                                                input,
                                                output
                                            }]
                                            setKey("resultsHistory", updatedResultsHistory)
                                        })
                                    }} marginTop={10} isMemorySafe>Save Results To History</WideButton>
                                )
                            }
                            <SplitButton delayLeftPress leftLabel={"Back"} onLeftPress={() => {
                                navigation.goBack()
                            }} rightLabel={"Home"} onRightPress={() => {
                                navigation.popToTop()
                            }} delayRightPress />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    questionText: {
        marginTop: 30,
        paddingHorizontal: 40,
        width: "100%",
        textAlign: "center",
        color: colors.lightPurple,
        fontSize: 5 * screen.width,
        fontFamily: "Roboto-Italic",
        fontWeight: "500"
    },
    resultText: {
        paddingHorizontal: 30,
        marginTop: 30,
        marginBottom: 20,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 7 * screen.width,
        fontWeight: "900"
    },
    chartContainer: {
        width: "100%",
        height: 40 * screen.width + 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    pieChart: {
        width: 40 * screen.width,
        height: 40 * screen.width
    },
    explanation: {
        marginHorizontal: 20,
        marginBottom: 18,
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "400",
        fontSize: 4.75 * screen.width
    },
    savedMessageContainer: {
        marginTop: 10,
        height: 11.8 * screen.height,
        justifyContent: "center"
    },
    savedMessageText: {
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 5 * screen.width,
        lineHeight: 6.5 * screen.width,
        textAlign: "center"
    }
})

export default HomeResultsStack