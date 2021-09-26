function calculateAvg(listOfResults) {
    let sum = 0
    listOfResults.forEach(element => {
        sum += element
    });
    avg = sum / listOfResults.length
    return avg
}

function isDraw(team1Avg, team2Avg) {
    return team1Avg === team2Avg
}

function entitleOfTrophy(avg) {
    return avg >= 100
}

function getDrawResults(teamAvg) {
    if (entitleOfTrophy(teamAvg)) {
        result = `Both teams are entitle of the trophy with a draw avarage score of ${teamAvg}!`
    } else {
        result = `No team is entitle of the trophy with a draw avarage scroe of less than 100 - ${teamAvg}`
    }
    return result
}

function isTeam1Higher(team1Avg, team2Avg) {
    return team1Avg > team2Avg
}

function getWinningTeamResults(team) {
    if (entitleOfTrophy(team.avg)) {
        result = `${team.name} has won and entitled to the trophy with avarage score of ${team.avg}!`
    } else {
        result = `${team.name} has won but not entitled of the trophy with avarage score of - ${team.avg}!`
    }
    return result
}

function compareResults(team1, team2) {
    let score;
    team1Avg = team1.avg
    team2Avg = team2.avg
    if (isDraw(team1Avg, team2Avg)) {
        score = "draw"
        result = getDrawResults(team1Avg)
    } else if (isTeam1Higher(team1Avg, team2Avg)) {
        score = true
        result = getWinningTeamResults(team1)
    } else {
        score = false
        result = getWinningTeamResults(team2)
    }
    console.log(`${team1.name} - ${team1Avg}`)
    console.log(`${team2.name} - ${team2Avg}`)
    console.log(result)
    return score
}

module.exports = { calculateAvg, compareResults }