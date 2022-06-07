/*
    src/tabs/home/stacks/gettingStarted.js
*/

import React from "react"
import StaticInfo from "../../../components/staticInfo"
import helpContent from "../../../helpContent.json"

const HomeGettingStatedStack = ({ navigation }) => {
    return (
        <StaticInfo navigation={navigation} title={"Getting Started"} content={helpContent.gettingStarted} />
    )
}

export default HomeGettingStatedStack