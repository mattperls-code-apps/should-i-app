/*
    src/scripts/output.js
*/

import calculateScore from "./score"

const keys = [
    "finances",
    "family",
    "friends",
    "community",
    "health",
    "happiness"
]

const magnitudes = [
    "low",
    "mediumLow",
    "medium",
    "mediumHigh",
    "high"
]

const stringNouns = (nouns) => {
    if(nouns.length == 1){
        return nouns[0]
    } else if(nouns.length == 2){
        return `${nouns[0]} and ${nouns[1]}`
    } else {
        return `${nouns.slice(0, nouns.length - 2).join(", ")}, ${nouns[nouns.length - 2]}, and ${nouns[nouns.length - 1]}`
    }
}

const capitalizeFirstLetter = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1)
}

const randomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const allInfluencesAreZero = (input) => {
    for(let i = 0;i<6;i++){
        if(input.ratings[i] != 0 && input.ratings[i + 6] != 0){
            return false
        }
    }
    return true
}

const allImpactsAreZero = (input) => {
    for(let i = 0;i<6;i++){
        if(input.ratings[i] != 0){
            return false
        }
    }
    return true
}

const allImportanceAreZero = (input) => {
    for(let i = 0;i<6;i++){
        if(input.ratings[i + 6] != 0){
            return false
        }
    }
    return true
}

const allImpactsHaveSameSign = (input) => {
    let positive = null
    for(let i = 0;i<6;i++){
        if(input.ratings[i] == 0){
            return false
        } else if(positive == null){
            positive = input.ratings[i] > 0
        } else if(positive != input.ratings[i] > 0){
            return false
        }
    }
    return true
}

const impactSigns = (input) => {
    const neutralImpacts = []
    const negativeImpacts = []
    const positiveImpacts = []

    for(let i = 0;i<6;i++){
        if(input.ratings[i] == 0){
            neutralImpacts.push(keys[i])
        } else if(input.ratings[i] < 0){
            negativeImpacts.push(keys[i])
        } else {
            positiveImpacts.push(keys[i])
        }
    }

    return {
        neutralImpacts,
        negativeImpacts,
        positiveImpacts
    }
}

const impactAnalysis = (input) => {
    const impactMagnitudes = [
        "a very negative",
        "a somewhat negative",
        "little to no",
        "a somewhat positive",
        "a very positive"
    ]
    const impactClasses = {
        low: [],
        mediumLow: [],
        medium: [],
        mediumHigh: [],
        high: []
    }
    for(let i = 0;i<6;i++){
        const impact = input.ratings[i]
        if(impact < -60){
            impactClasses.low.push(keys[i])
        } else if(impact < -20){
            impactClasses.mediumLow.push(keys[i])
        } else if(impact < 20){
            impactClasses.medium.push(keys[i])
        } else if(impact < 60){
            impactClasses.mediumHigh.push(keys[i])
        } else {
            impactClasses.high.push(keys[i])
        }
    }

    let analysis = randomFromArray([
        "By analyzing the affects of your decision, we determined that this decision will have ",
        "We found this decision will have ",
    ])

    const impactMagnitudeDescriptions = []
    magnitudes.forEach((classKey, index) => {
        const impactClass = impactClasses[classKey]
        if(impactClass.length != 0){
            impactMagnitudeDescriptions.push(`${impactMagnitudes[index]} impact on your ${stringNouns(impactClass)}`)
        }
    })
    if(impactMagnitudeDescriptions.length > 3){
        analysis += `${stringNouns(impactMagnitudeDescriptions.slice(0, impactMagnitudeDescriptions.length - 2))}. It will also have ${stringNouns(impactMagnitudeDescriptions.slice(impactMagnitudeDescriptions.length - 2))}.`
    } else {
        analysis += `${stringNouns(impactMagnitudeDescriptions)}.`
    }
    return analysis
}

const importanceAnalysis = (input) => {
    const importanceMagnitudes = [
        "not at all",
        "not very",
        "somewhat",
        "pretty",
        "very"
    ]
    const importanceClasses = {
        low: [],
        mediumLow: [],
        medium: [],
        mediumHigh: [],
        high: []
    }
    for(let i = 0;i<6;i++){
        const importance = input.ratings[i + 6]
        if(importance < 20){
            importanceClasses.low.push(keys[i])
        } else if(importance < 40){
            importanceClasses.mediumLow.push(keys[i])
        } else if(importance < 60){
            importanceClasses.medium.push(keys[i])
        } else if(importance < 80){
            importanceClasses.mediumHigh.push(keys[i])
        } else {
            importanceClasses.high.push(keys[i])
        }
    }

    let analysis = randomFromArray([
        "Based on your input, ",
        "Based on what you entered, ",
        "From your input, we found "
    ])

    const importanceMagnitudeDescriptions = []
    magnitudes.forEach((classKey, index) => {
        const importanceClass = importanceClasses[classKey]
        if(importanceClass.length == 1){
            importanceMagnitudeDescriptions.push(`${Math.random() < 0.5 ? "your " : ""}${importanceClass[0]} ${importanceClass == "finances" || importanceClass == "friends" ? "are" : "is"} ${importanceMagnitudes[index]} important to you`)
        } else if(importanceClass.length != 0){
            importanceMagnitudeDescriptions.push(`${Math.random() < 0.5 ? "your " : ""}${stringNouns(importanceClass)} are ${importanceMagnitudes[index]} important to you`)
        }
    })
    if(importanceMagnitudeDescriptions.length > 3){
        analysis += `${stringNouns(importanceMagnitudeDescriptions.slice(0, importanceMagnitudeDescriptions.length - 2))}. Also, ${stringNouns(importanceMagnitudeDescriptions.slice(importanceMagnitudeDescriptions.length - 2))}.`
    } else {
        analysis += `${stringNouns(importanceMagnitudeDescriptions)}.`
    }
    return analysis
}

const scoreAnalysis = (input) => {
    if(allImportanceAreZero(input)){
        return {
            intro: "We were unable to calculate a score for this decision.",
            analysis: "Since none of the decision factors are important to you, the impacts of your decision won't matter to you either way."
        }
    } else if(allImpactsAreZero(input)){
        return {
            intro: "We were unable to calculate a score for this decision.",
            analysis: "Since the decision would have no impacts, nothing will happen either way."
        }
    } else if(allInfluencesAreZero(input)){
        return {
            intro: "We were unable to calculate a score for this decision.",
            analysis: "Since none of the things that matter to you are impacted, the impacts of the decision will not matter to you either way."
        }
    }

    let analysis
    const score = Math.round(calculateScore(input))
    let intro = `The decision score we calculated is ${score}. `
    if(score < -50){
        intro += "This is a very low score, and indicates this is most likely a very bad idea."
    } else if(score < 0){
        intro += "This is a fairly low score, and indicates this is most likely a pretty bad idea."
    } else if(score == 0){
        intro += "This is a neutral score, which means we aren't sure if it is good or bad idea."
    } else if(score < 50){
        intro += "This is a somewhat high score, and indicates this is most likely a pretty good idea."
    } else {
        intro += "This is a very high score, and indicates this is most likely a very good idea."
    }
    const { neutralImpacts, negativeImpacts, positiveImpacts } = impactSigns(input)

    if(allImpactsHaveSameSign(input)){
        const sign = negativeImpacts.length == 6 ? "negative" : "positive"
        const result = negativeImpacts.length == 6 ? "should not" : "should"
        analysis = `All the impacts were ${sign}, so no matter how important the decision factors are you, you ${result} do it.`
    } else if(negativeImpacts.length == 5 || positiveImpacts.length == 5){
        const sign = negativeImpacts.length == 5 ? "negative" : "positive"
        const oppSign = negativeImpacts.length == 5 ? "positive" : "negative"
        if((score != 0 && score > 0 ? "positive" : "negative") == sign){
            if(neutralImpacts.length > 0){
                const key = neutralImpacts[0]
                analysis = `All the decision factors except ${key} had ${sign} impacts, and since the decision has no impact on your ${key}, the result was not affected.`
            } else {
                const key = negativeImpacts.length == 1 ? negativeImpacts[0] : positiveImpacts[0]
                const impact = input.ratings[keys.indexOf(key)]
                const importance = Math.abs(input.ratings[keys.indexOf(key) + 6])
                if(impact > 50 && importance > 50){
                    analysis = `All the decision factors except ${key} had ${sign} impacts, and even though ${key} is important to you and the impact is very ${oppSign}, the other decision factors ultimately determined the result to be ${sign}.`
                } else if(impact > 50){
                    analysis = `All the decision factors except ${key} had ${sign} impacts, and even though the impact on your ${key} is pretty ${oppSign}, the result was not changed.`
                } else if(importance > 50){
                    analysis = `All the decision factors except ${key} had ${sign} impacts, and even though ${key} is important to you, the impact was not very significant, so the result was not changed.`
                } else {
                    analysis = `All the decision factors except ${key} had ${sign} impacts, and since ${key} is not too important and the impact is not very significant, the result is still the same.`
                }
            }
        } else {
            const key = negativeImpacts.length == 1 ? negativeImpacts[0] : positiveImpacts[0]
            const impact = input.ratings[keys.indexOf(key)]
            const importance = Math.abs(input.ratings[keys.indexOf(key) + 6])
            if(impact > 50 && importance > 50){
                analysis = `All the decision factors except ${key} had ${sign} impacts, but since ${key} is important to you and the decision would have a very ${oppSign} impact, the overall result is ${score == 0 ? "neutral" : oppSign}.`
            } else if(impact > 50){
                analysis = `All the decision factors except ${key} had ${sign} impacts, but because of the very ${oppSign} impact, the result is ${score == 0 ? "neutral" : oppSign}.`
            } else if(importance > 50){
                analysis = `All the decision factors except ${key} had ${sign} impacts, and despite the impact on ${key} being fairly insignificant, the high importance to you of ${key} caused the result to be ${score == 0 ? "neutral" : oppSign}.`
            } else {
                analysis = `All the decision factors except ${key} had ${sign} impacts, and despite the low importance of ${key} to you and the minimal impact on it, the ${sign} influences to the result were overpowered, and caused the result to be ${score == 0 ? "neutral" : oppSign}.`
            }
        }
    } else if(neutralImpacts.length == 5){
        const sign = negativeImpacts.length == 1 ? "negative" : "positive"
        const key = negativeImpacts.length == 1 ? negativeImpacts[0] : positiveImpacts[0]
        analysis = `All the decision factors except ${key} had neutral impacts, and since the decision would have a ${sign} impact on your ${key}, the result is ${sign}.`
    } else {
        const negativeInfluences = []
        const neutralInfluences = []
        const positiveInfluences = []
        for(let i = 0;i<6;i++){
            if(input.ratings[i] == 0 || input.ratings[i + 6] == 0){
                neutralInfluences.push(keys[i])
            } else if(input.ratings[i] < 0){
                negativeInfluences.push(keys[i])
            } else {
                positiveInfluences.push(keys[i])
            }
        }
        if(neutralInfluences.length == 0){
            if(score == 0){
                analysis = `Together, the positive influence on ${stringNouns(positiveInfluences)} matched the negative influence on ${stringNouns(negativeInfluences)}, so the result is neutral.`
            } else {
                analysis = `The collective ${score > 0 ? "positive" : "negative"} influence on ${stringNouns(score > 0 ? positiveInfluences : negativeInfluences)} was ${["slightly more than", "more than", "significantly more than"][Math.min(Math.floor(Math.abs(score) * 3 / 100), 2)]} the ${score > 0 ? "negative" : "positive"} influence on ${stringNouns(score > 0 ? negativeInfluences : positiveInfluences)}, so the result is ${score > 0 ? "positive" : "negative"}.`
            }
        } else {
            if(score == 0){
                analysis = `${capitalizeFirstLetter(stringNouns(neutralInfluences))} had no influence over the result. Together, the positive influence on ${stringNouns(positiveInfluences)} matched the negative influence on ${stringNouns(negativeInfluences)}, so the result is neutral.`
            } else if(negativeInfluences.length == 0 || positiveInfluences.length == 0){
                if(negativeInfluences.length == 1 || positiveInfluences.length == 1){
                    analysis = `${capitalizeFirstLetter(stringNouns(neutralInfluences))} had no influence over the results. The remaining influence, ${negativeInfluences.length > 0 ? negativeInfluences[0] : positiveInfluences[0]}, was ${score > 0 ? "positive" : "negative"}, so the result is ${score > 0 ? "positive" : "negative"}.`
                } else {
                    analysis = `${capitalizeFirstLetter(stringNouns(neutralInfluences))} had no influence over the results. The remaining influences, ${stringNouns(negativeInfluences.length > 0 ? negativeInfluences : positiveInfluences)}, were all ${score > 0 ? "positive" : "negative"}, so the result is ${score > 0 ? "positive" : "negative"}.`
                }
            } else {
                analysis = `${capitalizeFirstLetter(stringNouns(neutralInfluences))} had no influence over the result. The ${score > 0 ? "positive" : "negative"} influence on ${stringNouns(score > 0 ? positiveInfluences : negativeInfluences)} was ${["slightly more than", "more than", "significantly more than"][Math.min(Math.floor(Math.abs(score) * 3 / 100), 2)]} the ${score > 0 ? "negative" : "positive"} influence on ${stringNouns(score > 0 ? negativeInfluences : positiveInfluences)}, so the result is ${score > 0 ? "positive" : "negative"}.`
            }
        }
    }

    return {
        intro,
        analysis
    }
}

const generateOutput = (input) => {
    return {
        score: Math.round(calculateScore(input)),
        analysis: {
            importance: importanceAnalysis(input),
            impact: impactAnalysis(input),
            score: scoreAnalysis(input)
        }
    }
}

export default generateOutput