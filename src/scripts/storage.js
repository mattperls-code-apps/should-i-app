/*
    src/scripts/storage.js
*/

import AsyncStorage from "@react-native-async-storage/async-storage"

import { mostRecentTermsAndConditions } from "../constants"

const initialize = (callback) => {
    AsyncStorage.getAllKeys((error, keys) => {
        if(error){
            console.warn(error)
        } else {
            const items = []

            if(!keys.includes("lastSignedTermsAndConditions")){
                const lastSignedTermsAndConditions = JSON.stringify("Never Signed")
                items.push([ "lastSignedTermsAndConditions", lastSignedTermsAndConditions ])
            }

            if(!keys.includes("useSavedPreferences")){
                const useSavedPreferences = JSON.stringify(false)
                items.push([ "useSavedPreferences", useSavedPreferences ])
            }

            if(!keys.includes("automaticallySaveResults")){
                const automaticallySaveResults = JSON.stringify(false)
                items.push([ "automaticallySaveResults", automaticallySaveResults ])
            }

            if(!keys.includes("preferences")){
                const preferences = JSON.stringify({
                    finances: 0,
                    family: 0,
                    friends: 0,
                    community: 0,
                    health: 0,
                    happiness: 0
                })
                items.push([ "preferences", preferences ])
            }

            if(!keys.includes("resultsHistory")){
                const resultsHistory = JSON.stringify([])
                items.push([ "resultsHistory", resultsHistory ])
            }

            if(items.length == 0){
                if(typeof callback == "function"){
                    callback()
                }
            } else {
                AsyncStorage.multiSet(items, (error) => {
                    if(error){
                        console.warn(error)
                    } else if(typeof callback == "function"){
                        callback()
                    }
                })
            }
        }
    })
}

const getKey = (key, callback) => {
    AsyncStorage.getItem(key, (error, result) => {
        if(error){
            console.warn(error)
        } else {
            try {
                callback(JSON.parse(result))
            } catch(e){
                console.warn(e)
            }
        }
    })
}

const setKey = (key, value, callback) => {
    AsyncStorage.setItem(key, JSON.stringify(value), (error) => {
        if(error){
            console.warn(error)
        } else if(typeof callback == "function"){
            callback()
        }
    })
}

const hasMostRecentTermsAndConditions = (callback) => {
    AsyncStorage.getAllKeys((error, keys) => {
        if(error){
            console.warn(error)
        } else {
            if(!keys.includes("lastSignedTermsAndConditions")){
                callback(false)
            } else {
                getKey("lastSignedTermsAndConditions", (lastSigned) => {
                    callback(lastSigned == mostRecentTermsAndConditions)
                })
            }
        }
    })
}

export {
    hasMostRecentTermsAndConditions,
    initialize,
    getKey,
    setKey
}