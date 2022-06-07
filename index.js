/*
    index.js
*/

import "react-native-gesture-handler"
import { enableScreens } from "react-native-screens"
import { AppRegistry } from "react-native"
import App from "./App"

enableScreens(false)

AppRegistry.registerComponent("shouldi", () => App)