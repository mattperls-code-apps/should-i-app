/*
    src/components/historyItem.js
*/

import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import haptic from "../scripts/haptics"
import { getKey, setKey } from "../scripts/storage"
import { screen, colors } from "../constants"

const HistoryItem = ({ item, navigation, refreshResultsHistory }) => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={() => {
            haptic("impactLight")
            navigation.push("MoreInfo", item)
        }}>
            <View style={styles.itemContainer}>
                <View style={styles.scoreContainer}>
                    <Text style={[styles.scoreText, {
                        color: item.output.score < 0 ? colors.red : item.output.score == 0 ? colors.grey : colors.green
                    }]}>
                        {
                            item.output.score
                        }
                    </Text>
                </View>
                <View style={styles.previewContainer}>
                    <Text style={styles.questionText} numberOfLines={1} ellipsizeMode={"tail"}>
                        {
                            item.input.question.length == 0 ? "(No Question Provided)" : item.input.question
                        }
                    </Text>
                    <Text style={styles.dateText}>
                        {
                            new Date(item.id).toLocaleDateString()
                        }
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity activeOpacity={0.75} onPress={() => {
                        haptic("impactLight")
                        getKey("resultsHistory", (resultsHistory) => {
                            const updatedResultsHistory = resultsHistory.filter((result) => result.id != item.id)
                            setKey("resultsHistory", updatedResultsHistory, refreshResultsHistory)
                        })
                    }}>
                        <FontAwesomeIcon icon={faTrash} size={25} color={colors.lightPurple}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: "100%",
        height: 80,
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 1,
        backgroundColor: colors.mediumPurple
    },
    scoreContainer: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderWidth: 2,
        borderColor: colors.extraDarkPurple,
        borderRadius: 10,
        backgroundColor: colors.darkPurple
    },
    scoreText: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 20
    },
    previewContainer: {
        width: 100 * screen.width - 145,
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 5
    },
    questionText: {
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 18
    },
    dateText: {
        marginTop: 5,
        color: colors.extraLightPurple,
        fontFamily: "Roboto-Italic",
        fontWeight: "400",
        fontSize: 14
    },
    buttonsContainer: {
        height: 80,
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 20
    }
})

export default HistoryItem