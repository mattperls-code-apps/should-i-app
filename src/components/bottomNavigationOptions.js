/*
    src/components/bottomNavigationOptions.js
*/

import React from "react"
import { WideButton, SplitButton } from "./buttons"

const BottomNavigationOptions = ({ helpLabel, onHelp, onBack, onNext, delayNext = true }) => {
    return (
        <React.Fragment>
            <WideButton onPress={onHelp}>
                {
                    helpLabel
                }
            </WideButton>
            <SplitButton leftLabel={"Back"} onLeftPress={onBack} rightLabel={"Next"} onRightPress={onNext} delayRightPress={delayNext} />
        </React.Fragment>
    )
}

export default BottomNavigationOptions