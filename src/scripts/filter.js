/*
    src/scripts/filter.js
*/

const toKeywords = (string) => {
    return string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/\s\s+/g, " ").split(" ").filter(keyword => keyword.length > 0).map(keyword => keyword.toLocaleLowerCase())
}

const filter = (searchQuery, resultsHistory) => {
    if(!Array.isArray(resultsHistory)){
        return []
    }
    const queryKeywords = toKeywords(searchQuery)
    if(queryKeywords.length == 0){
        return resultsHistory
    } else {
        const scoredResults = []
        resultsHistory.forEach(result => {
            let score = 0
            toKeywords(result.input.question.length == 0 ? "(No Question Provided)" : result.input.question).forEach(questionKeyword => {
                queryKeywords.forEach(queryKeyword => {
                    if(questionKeyword == queryKeyword){
                        score += 2.5
                    } else if(questionKeyword.includes(queryKeyword) || queryKeyword.includes(questionKeyword)){
                        score++
                    }
                })
            })
            if(score > 0){
                scoredResults.push({
                    score,
                    result
                })
            }
        })
        scoredResults.sort((a, b) => {
            if(a.score > b.score){
                return -1
            } else if(a.score < b.score){
                return 1
            } else {
                return 0
            }
        })
        return scoredResults.map(({result}) => result)
    }
}

export default filter