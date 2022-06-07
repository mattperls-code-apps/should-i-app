/*
    src/tabs/start/stacks/sign.js
*/

import React, { useState } from "react"
import { View, ScrollView } from "react-native"
import StackContainer from "../../../components/stackContainer"
import { RegularButton } from "../../../components/buttons"
import { TermsAndConditions } from "../../../components/legal"
import CheckBox from "react-native-check-box"
import haptic from "../../../scripts/haptics"
import { initialize, setKey } from "../../../scripts/storage"
import { screen, colors, mostRecentTermsAndConditions } from "../../../constants"

const Sign = ({ navigation }) => {
    let [agreedToMostRecent, setAgreedToMostRecent] = useState(false)

    return (
        <StackContainer navigation={navigation} header>
            <ScrollView style={{ paddingTop: 2.5 * screen.height, paddingHorizontal: 20, borderBottomWidth: 1, borderBottomColor: colors.mediumLightPurple }} contentContainerStyle={{ paddingBottom: 3.5 * screen.height }}>
                <TermsAndConditions />
            </ScrollView>
            <View style={{ width: "100%", paddingTop: 3.5 * screen.height, paddingBottom: 5 * screen.height + screen.bottom, paddingHorizontal: 30 }}>
                <CheckBox style={{ paddingBottom: 1.5 * screen.height }} rightTextStyle={{ fontFamily: "Roboto", fontWeight: "700", fontSize: 4 * screen.width, color: colors.extraLightPurple }} rightText={"By checking this box, you are agreeing to the terms and conditions above."} checkBoxColor={colors.extraLightPurple} uncheckedCheckBoxColor={colors.lightPurple} onClick={() => {
                    haptic("impactMedium")
                    setAgreedToMostRecent(!agreedToMostRecent)
                }} isChecked={agreedToMostRecent} />
                <RegularButton noDelay onPress={() => {
                    if(agreedToMostRecent){
                        initialize(() => {
                            setKey("lastSignedTermsAndConditions", mostRecentTermsAndConditions, () => {
                                navigation.dangerouslyGetParent().navigate("Home")
                            })
                        })
                    }
                }}>Continue</RegularButton>
            </View>
        </StackContainer>
    )
}

export default Sign