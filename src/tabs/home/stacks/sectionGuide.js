/*
    src/tabs/home/stacks/sectionGuide.js
*/

import React, { useEffect } from "react"
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import { SplitButton } from "../../../components/buttons"
import { screen, colors } from "../../../constants"
import helpContent from "../../../helpContent.json"

const HomeSectionGuideStack = ({ navigation, route, setIndex }) => {
    useEffect(() => {
        return () => {
            if(route.params.section == "Importance"){
                setIndex(5)
            }
        }
    }, [])

    return (
        <StackContainer navigation={navigation}>
            <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false} >
                <TouchableOpacity activeOpacity={1}>
                    <Title height={22.5 * screen.height} fontSize={9 * screen.width}>
                        {
                            route.params.section == "Question" ? helpContent.questionGuide.name : route.params.section == "Impact" ? helpContent.impactGuide.name : helpContent.importanceGuide.name
                        }
                    </Title>
                    <Text style={styles.contentText}>
                        {
                            route.params.section == "Question" ? helpContent.questionGuide.content : route.params.section == "Impact" ? helpContent.impactGuide.content : helpContent.importanceGuide.content
                        }
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            <SplitButton delayLeftPress leftLabel={"Back"} onLeftPress={() => {
                navigation.pop()
            }} delayRightPress rightLabel={"Next"} onRightPress={() => {
                if(route.params.section == "Question"){
                    navigation.push("QuestionInput")
                } else {
                    navigation.push("RatingsInput")
                    if(route.params.section == "Impact"){
                        setIndex(0)
                    } else {
                        setIndex(6)
                    }
                }
            }} />
            <View style={styles.spacer} />
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        marginBottom: 1 * screen.height
    },
    contentText: {
        width: 100 * screen.width - 60,
        alignSelf: "center",
        color: colors.lightPurple,
        fontFamily: "Roboto",
        fontWeight: "500",
        fontSize: 20
    },
    spacer: {
        height: 4 * screen.height
    }
})

export default HomeSectionGuideStack