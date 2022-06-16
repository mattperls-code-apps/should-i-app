/*
    src/components/navigationPushContainer.js
*/

import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

const NavigationPushContainer = (props) => {
    let [clickable, setClickable] = useState(true)
    let [clickFired, setClickFired] = useState(false)

    useEffect(() => {
        let isMounted = true

        if(clickFired){
            setClickFired(false)
            if(clickable){
                props.onPress()
                setClickable(false)
                setTimeout(() => {
                    if(!props.isMemorySafe || isMounted){
                        setClickable(true)
                    }
                }, typeof props.delay == "number" ? props.delay : 500)
            }
        }

        return () => { isMounted = false }
    }, [clickable, clickFired])

    return <TouchableOpacity {...props} onPress={() => {
        setClickFired(true)
    }} />
}

export default NavigationPushContainer