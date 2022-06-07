/*
    src/constants.js
*/

import { initialWindowMetrics } from "react-native-safe-area-context"

const screen = {
    width: (initialWindowMetrics.frame.width - initialWindowMetrics.insets.left - initialWindowMetrics.insets.right) / 100,
    height: (initialWindowMetrics.frame.height - initialWindowMetrics.insets.top - Math.max(initialWindowMetrics.insets.bottom + 60, 80)) / 100,
    ...initialWindowMetrics.insets
}

const colors = {
    extraLightPurple: "hsl(255, 80%, 95%)",
    lightPurple: "hsl(255, 80%, 85%)",
    mediumLightPurple: "hsl(255, 40%, 50%)",
    mediumPurple: "hsl(255, 60%, 30%)",
    darkPurple: "hsl(255, 80%, 17.5%)",
    extraDarkPurple: "hsl(255, 85%, 10%)",
    red: "hsl(348, 83%, 55%)",
    grey: "hsl(0, 0%, 80%)",
    green: "hsl(151, 75%, 45%)",
    transparent: "rgba(0, 0, 0, 0)"
}

const mostRecentTermsAndConditions = "5-10-2022"

export {
    screen, colors, mostRecentTermsAndConditions
}