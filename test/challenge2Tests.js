const expect = require('chai').expect
const { calculateAvg, compareResults } = require('../module/challenge2.js')
it('Team1 should win with havarage score higher than 100', ()=> {
    team1 = {
        score: [96, 108, 100],
        name: "dolphins",
        avg: calculateAvg([96, 108, 100])
    }
    team2 = {
        score: [88, 91, 110],
        name: "koalas",
        avg: calculateAvg([88, 91, 110])
    }
    expect(compareResults(team1, team2)).to.equal(true)
})

it('Team1 should win with havarage score less than 100', ()=> {
    team1 = {
        score: [96, 108, 89],
        name: "dolphins",
        avg: calculateAvg([96, 108, 89])
    }
    team2 = {
        score: [88, 91, 110],
        name: "koalas",
        avg: calculateAvg([88, 91, 110])
    }
    expect(compareResults(team1, team2)).to.equal(true)
})

it('Team2 should win with avarage score higher than 100', ()=> {
    team1 = {
        score: [97, 112, 101],
        name: "dolphins",
        avg: calculateAvg([97, 112, 101])
    }
    team2 = {
        score: [109, 95, 123],
        name: "koalas",
        avg: calculateAvg([109, 95, 123])
    }
    expect(compareResults(team1, team2)).to.equal(false)
})

it('Team2 should win with avarage score less than 100', ()=> {
    team1 = {
        score: [54, 112, 101],
        name: "dolphins",
        avg: calculateAvg([54, 112, 101])
    }
    team2 = {
        score: [80, 95, 123],
        name: "koalas",
        avg: calculateAvg([80, 95, 123])
    }
    expect(compareResults(team1, team2)).to.equal(false)
})

it('Should be draw with avarage higher than 100', ()=> {
    team1 = {
        score: [97, 112, 101],
        name: "dolphins",
        avg: calculateAvg([97, 112, 101])
    }
    team2 = {
        score: [109, 95, 106],
        name: "koalas",
        avg: calculateAvg([109, 95, 106])
    }
    expect(compareResults(team1, team2)).to.equal("draw")
})

it('Should be draw with avarage less than 100', ()=> {
    team1 = {
        score: [97, 101, 101],
        name: "dolphins",
        avg: calculateAvg([97, 101, 101])
    }
    team2 = {
        score: [109, 90, 100],
        name: "koalas",
        avg: calculateAvg([109, 90, 100])
    }
    expect(compareResults(team1, team2)).to.equal("draw")
})
