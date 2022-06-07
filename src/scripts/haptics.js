/*
    src/scripts/haptics.js
*/

import ReactNativeHapticFeedback from "react-native-haptic-feedback"

const haptic = (type) => {
    ReactNativeHapticFeedback.trigger(type, {
        enableVibrateFallback: false,
        ignoreAndroidSystemSettings: false
    })
}

export default haptic