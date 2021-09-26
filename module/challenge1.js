function calculateBMI(mass, height) {
    bmi = mass / height ** 2;
    console.log("bmi: " + bmi);
    return bmi;
};

function higherBMI(person1, person2) {
    let highBMi, lowBMI;
    if(person1.bmi > person2.bmi) {
        highBMi = person1;
        lowBMI = person2;
    } else {
        highBMi = person2;
        lowBMI = person1;
    }
    console.log(`${highBMi.name}'s BMI (${highBMi.bmi}) is higher than ${lowBMI.name}'s (${lowBMI.bmi})! `)
    console.log(person1.bmi > person2.bmi)
    return person1.bmi > person2.bmi;
};

module.exports = {calculateBMI, higherBMI}
