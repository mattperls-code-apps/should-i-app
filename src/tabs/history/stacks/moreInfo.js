/*
    src/tabs/history/stacks/moreInfo.js
*/

import React, { useRef } from "react"
import { View, ScrollView, TouchableWithoutFeedback, Text, StyleSheet } from "react-native"
import StackContainer from "../../../components/stackContainer"
import BarChart from "../../../components/barChart"
import ExpandableInfoBar from "../../../components/expandableInfoBar"
import { WideButton } from "../../../components/buttons"
import ViewShot, { captureRef } from "react-native-view-shot"
import Share from "react-native-share"
import { screen, colors } from "../../../constants"

const HistoryMoreInfoStack = ({ navigation, route }) => {
    const { input, output } = route.params

    let resultsDisplay = useRef()

    return (
        <StackContainer header navigation={navigation}>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.resultsContentContainer} showsVerticalScrollIndicator={false}>
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
                        <ExpandableInfoBar label={"Importance Analysis"} info={output.analysis.importance} />
                        <ExpandableInfoBar label={"Impact Analysis"} info={output.analysis.impact} />
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
                            <WideButton onPress={() => {
                                navigation.navigate("Home", {
                                    screen: "Default",
                                    input
                                })
                            }} marginTop={10}>Reopen As New Question</WideButton>
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
        marginVertical: 20,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 7 * screen.width,
        fontWeight: "900",
        textShadowColor: "rgba(255, 255, 255, 0.3)",
        textShadowRadius: 2.5 * screen.width
    },
    resultsContentContainer: {
        backgroundColor: colors.mediumPurple
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
    }
})

export default HistoryMoreInfoStack