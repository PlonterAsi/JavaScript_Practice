function tipCalculator(bill) {
    tipPrecentage = (50 <= bill && bill <= 300) ? 15 : 20
    tipAmount = bill * tipPrecentage / 100
    totalAmount = bill + tipAmount
    console.log(`The bill was ${bill}, the tip was ${tipAmount}, and the total value ${totalAmount}`)
    return { tipPrecentage, tipAmount, totalAmount }
}

module.exports = { tipCalculator }