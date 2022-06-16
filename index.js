/*
    index.js
*/

import "react-native-gesture-handler"
import { enableScreens } from "react-native-screens"
import { Text, AppRegistry } from "react-native"
import App from "./App"

enableScreens(false)

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.maxFontSizeMultiplier = 1.1

AppRegistry.registerComponent("shouldi", () => App)