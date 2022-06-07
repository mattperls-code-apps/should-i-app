/*
    src/tabs/home/stacks/inputHelp.js
*/

import React from "react"
import StaticInfo from "../../../components/staticInfo"
import helpContent from "../../../helpContent.json"

const HomeInputHelpStack = ({ navigation, route }) => {
    return (
        <StaticInfo navigation={navigation} title={route.params.name == "Question" ? helpContent.question.name : helpContent.ratings[route.params.index].name} content={route.params.name == "Question" ? helpContent.question.content : helpContent.ratings[route.params.index].content} />
    )
}

export default HomeInputHelpStack