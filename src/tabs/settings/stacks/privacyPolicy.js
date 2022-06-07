/*
    src/tabs/settings/stacks/privacyPolicy.js
*/

import React from "react"
import { LegalInfo } from "../../../components/staticInfo"
import { PrivacyPolicy } from "../../../components/legal"

const SettingsPrivacyPolicyStack = ({ navigation }) => {
    return (
        <LegalInfo navigation={navigation} content={<PrivacyPolicy />} />
    )
}

export default SettingsPrivacyPolicyStack