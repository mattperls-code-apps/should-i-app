/*
    src/tabs/settings/stacks/preferenceHelp.js
*/

import React from "react"
import StaticInfo from "../../../components/staticInfo"
import helpContent from "../../../helpContent.json"

const SettingsPreferenceHelpStack = ({ navigation, route }) => {
    return (
        <StaticInfo navigation={navigation} title={helpContent.ratings[route.params.index].name} content={helpContent.ratings[route.params.index].content} />
    )
}

export default SettingsPreferenceHelpStack