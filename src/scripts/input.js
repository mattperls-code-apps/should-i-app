/*
    src/scripts/input.js
*/

import { getKey } from "./storage"

const defaultValue = (callback) => {
    getKey("useSavedPreferences", (useSavedPreferences) => {
        if(useSavedPreferences){
            getKey("preferences", (storedPreferences) => {
                callback({
                    question: "Should I ",
                    ratings: [
                        0, 0, 0, 0, 0, 0,
                        storedPreferences.finances,
                        storedPreferences.family,
                        storedPreferences.friends,
                        storedPreferences.community,
                        storedPreferences.health,
                        storedPreferences.happiness
                    ]
                })
            })
        } else {
            callback({
                question: "Should I ",
                ratings: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            })
        }
    })
}

const isActive = (input, defaults) => {
    if(input.question != "Should I " && input.question != ""){
        return true
    }
    for(let i = 0;i<input.ratings.length;i++){
        if(input.ratings[i] != defaults.ratings[i]){
            return true
        }
    }
    return false
}

const setQuestion = (text, input, setInput) => {
    setInput({
        ...input,
        question: text
    })
}

const setRating = (index, value, input, setInput) => {
    let inputCopy = {...input}
    inputCopy.ratings[index] = value
    setInput(inputCopy)
}

export {
    defaultValue, isActive, setQuestion, setRating
}