/*
    src/scripts/storage.js
*/

import AsyncStorage from "@react-native-async-storage/async-storage"
import CryptoJS from "react-native-crypto-js"
import KeyChain from "react-native-keychain"

import { mostRecentTermsAndConditions } from "../constants"

const getRandom32 = () => {
    return [...Array(32)].map(()=>(~~(Math.random()*36)).toString(36)).join("")
}

const getEncryptionKey = (callback) => {
    KeyChain.getGenericPassword().then((key) => {
        if(key){
            callback(key.password)
        } else {
            const encryptionKey = getRandom32()
            KeyChain.setGenericPassword("should-i-encryption-key", encryptionKey).then(() => {
                callback(encryptionKey)
            })
        }
    })
}

const initialize = (callback) => {
    AsyncStorage.getAllKeys((error, keys) => {
        if(error){
            console.warn(error)
        } else {
            getEncryptionKey((encryptionKey) => {
                const items = []

                if(!keys.includes("lastSignedTermsAndConditions")){
                    const stringData = JSON.stringify("Never Signed")
                    const lastSignedTermsAndConditions = CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString()
                    items.push([ "lastSignedTermsAndConditions", lastSignedTermsAndConditions ])
                }

                if(!keys.includes("useSavedPreferences")){
                    const stringData = JSON.stringify(false)
                    const useSavedPreferences = CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString()
                    items.push([ "useSavedPreferences", useSavedPreferences ])
                }

                if(!keys.includes("automaticallySaveResults")){
                    const stringData = JSON.stringify(false)
                    const automaticallySaveResults = CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString()
                    items.push([ "automaticallySaveResults", automaticallySaveResults ])
                }

                if(!keys.includes("preferences")){
                    const stringData = JSON.stringify({
                        finances: 0,
                        family: 0,
                        friends: 0,
                        community: 0,
                        health: 0,
                        happiness: 0
                    })
                    const preferences = CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString()
                    items.push([ "preferences", preferences ])
                }

                if(!keys.includes("resultsHistory")){
                    const stringData = JSON.stringify([])
                    const resultsHistory = CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString()
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
            })
        }
    })
}

const getKey = (key, callback) => {
    getEncryptionKey((encryptionKey) => {
        AsyncStorage.getItem(key, (error, result) => {
            if(error){
                console.warn(error)
            } else {
                try {
                    const decrypted = CryptoJS.AES.decrypt(result, encryptionKey).toString(CryptoJS.enc.Utf8)
                    callback(JSON.parse(decrypted.slice(0, decrypted.length - 32)))
                } catch(e){
                    console.warn(e)
                }
            }
        })
    })
}

const setKey = (key, value, callback) => {
    getEncryptionKey((encryptionKey) => {
        const stringData = JSON.stringify(value)
        AsyncStorage.setItem(key, CryptoJS.AES.encrypt(stringData + getRandom32(), encryptionKey).toString(), (error) => {
            if(error){
                console.warn(error)
            } else if(typeof callback == "function"){
                callback()
            }
        })
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