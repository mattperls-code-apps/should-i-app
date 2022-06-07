/*
    src/components/barChart.js
*/

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"
import { screen, colors } from "../constants"

const BarChart = ({ data }) => {
    return Math.max(...data.map(value => Math.abs(value))) > 0 &&
        (
            <View style={styles.container}>
                <Svg width={100 * screen.width - 40} height={45 * screen.width} viewBox={"0 0 137 100"} style={styles.chart}>
                    <Defs>
                        <LinearGradient id={"positiveBar"} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                            <Stop offset={"1"} stopColor={colors.green} stopOpacity={0.3}/>
                            <Stop offset={"0.25"} stopColor={colors.green} stopOpacity={0.85}/>
                            <Stop offset={"0"} stopColor={colors.green} stopOpacity={1}/>
                        </LinearGradient>
                        <LinearGradient id={"negativeBar"} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
                            <Stop offset={"1"} stopColor={colors.red} stopOpacity={1}/>
                            <Stop offset={"0.75"} stopColor={colors.red} stopOpacity={0.85}/>
                            <Stop offset={"0"} stopColor={colors.red} stopOpacity={0.3}/>
                        </LinearGradient>
                    </Defs>
                    {
                        (() => {
                            const bars = []
                            for(let i = 0;i<6;i++){
                                bars.push(
                                    <Rect key={i} x={23 * i} y={"50"} width={22} height={-data[i].toString() / Math.max(...(data.map(value => Math.abs(value)))) * 50} fill={data[i] > 0 ? "url(#positiveBar)" : "url(#negativeBar)"} />
                                )
                            }
                            return bars
                        })()
                    }
                </Svg>
                <View style={styles.labelsContainer}>
                    {
                        (() => {
                            const labels = []
                            for(let i = 0;i<6;i++){
                                labels.push(
                                    <View style={styles.labelContainer} key={i}>
                                        <Text style={styles.labelText} numberOfLines={1}>
                                            {
                                                data[i] == 0 ? "" : ["Finances", "Family", "Friends", "Community", "Health", "Happiness"][i]
                                            }
                                        </Text>
                                    </View>
                                )
                            }
                            return labels
                        })()
                    }
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        width: 100 * screen.width - 40,
        height: 75 * screen.width,
        marginBottom: 20,
        paddingVertical: 5 * screen.width,
        borderWidth: 1,
        borderColor: colors.mediumLightPurple,
        borderRadius: 7.5 * screen.width,
        backgroundColor: colors.darkPurple,
        alignSelf: "center"
    },
    chart: {
        width: "100%",
        height: 45 * screen.width,
        overflow: "hidden"
    },
    labelsContainer: {
        width: "100%",
        height: 12.5 * screen.width,
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 7.5 * screen.width
    },
    labelContainer: {
        width: 1.37 * 45 * 22/137 * screen.width,
        height: "100%",
        paddingTop: 2.5 * screen.width,
        alignItems: "center",
        marginHorizontal: 1.37 * 45 * 0.5/137 * screen.width
    },
    labelText: {
        transform: [
            {
                translateX: 1.5 * screen.width,
            },
            {
                rotateZ: "-40deg"
            }
        ],
        width: 20 * screen.width,
        color: colors.extraLightPurple,
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 3.5 * screen.width,
        textAlign: "center"
    },
    noDataContainer: {
        width: 100 * screen.width - 40,
        height: 45 * screen.width,
        marginBottom: 20,
        paddingVertical: 5 * screen.width,
        borderWidth: 1,
        borderColor: colors.mediumLightPurple,
        borderRadius: 7.5 * screen.width,
        backgroundColor: colors.darkPurple,
        alignSelf: "center",
        justifyContent: "center"
    },
    noDataLabel: {
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 5.5 * screen.width,
        textAlign: "center",
        paddingHorizontal: 70,
    }
})

export default BarChart