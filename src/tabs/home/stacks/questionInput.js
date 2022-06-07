/*
    src/tabs/home/stacks/questionInput.js
*/

import React, { useRef } from "react"
import { KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, StyleSheet } from "react-native"
import StackContainer from "../../../components/stackContainer"
import Title from "../../../components/title"
import BottomNavigationOptions from "../../../components/bottomNavigationOptions"
import { setQuestion } from "../../../scripts/input"
import { screen, colors } from "../../../constants"

const HomeQuestionInputStack = ({ navigation, input, setInput, defaults }) => {
    let inputElement = useRef()

    return (
        <StackContainer onPress={() => {
            inputElement.current.blur()
        }}>
            <Title height={22.5 * screen.height} fontSize={9 * screen.width}>Write Your Question Here</Title>
            <TouchableWithoutFeedback onPress={(e) => {
                inputElement.current.focus()
                e.stopPropagation()
            }}>
                <KeyboardAvoidingView behavior={"height"} style={styles.inputContainer}>
                    <TextInput autoFocus style={styles.input} value={input.question} placeholder={"Should I ...?"} placeholderTextColor={colors.mediumLightPurple} onChangeText={(text) => {
                        if(text.includes("\n")){
                            inputElement.current.blur()
                        }
                        setQuestion(text.replaceAll("\n", ""), input, setInput, defaults)
                    }} ref={inputElement} selectionColor={colors.mediumPurple} autoCapitalize={"sentences"} autoCompleteType={"off"} autoCorrect contextMenuHidden multiline/>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            <BottomNavigationOptions helpLabel={"Example Questions"} onHelp={() => {
                navigation.push("InputHelp", {
                    name: "Question"
                })
            }} onBack={() => {
                navigation.pop()
            }} onNext={() => {
                navigation.push("SectionGuide", { section: "Impact" })
            }}/>
        </StackContainer>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 99.2 * screen.width - 40,
        height: 47.2 * screen.height,
        justifyContent: "center",
        marginBottom: 2.5 * screen.height,
        padding: 10,
        borderWidth: 0.4 * screen.height,
        borderColor: colors.darkPurple,
        borderRadius: 3.5 * screen.height,
        backgroundColor: colors.lightPurple
    },
    input: {
        paddingHorizontal: 10,
        color: colors.extraDarkPurple,
        fontFamily: "Roboto",
        fontSize: 5 * screen.width,
        textAlign: "center"
    }
})

export default HomeQuestionInputStack