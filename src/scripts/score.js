/*
    src/scripts/score.js
*/

const calculateScore = (input) => {
    let weightedImpactSum = 0
    let absoluteWeightedImpactSum = 0
    for(let i = 0;i<6;i++){
        weightedImpactSum += input.ratings[i] * input.ratings[i + 6]
        absoluteWeightedImpactSum += Math.abs(input.ratings[i]) * input.ratings[i + 6]
    }
    const score = weightedImpactSum / absoluteWeightedImpactSum
    if(isNaN(score)){
        return 0
    } else {
        return Math.round(100 * score)
    }
}

export default calculateScore