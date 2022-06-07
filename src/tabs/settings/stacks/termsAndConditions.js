/*
    src/tabs/settings/stacks/termsAndConditions.js
*/

import React from "react"
import { LegalInfo } from "../../../components/staticInfo"
import { TermsAndConditions } from "../../../components/legal"

const SettingsTermsAndConditionsStack = ({ navigation }) => {
    return (
        <LegalInfo navigation={navigation} content={<TermsAndConditions />} />
    )
}

export default SettingsTermsAndConditionsStack