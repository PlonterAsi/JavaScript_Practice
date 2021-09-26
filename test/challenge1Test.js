const expect = require('chai').expect;
const { calculateBMI, higherBMI } = require('../module/challenge1.js');


it('Person2 is higher than person1', ()=> {
    person1 = {
        mass: 95,
        height: 1.88,
        name: "mark",
        bmi: calculateBMI(95, 1.88)
    }
    
    person2 = {
        mass: 85,
        height: 1.76,
        name: "john",
        bmi: calculateBMI(85, 1.76)
    }
    expect(higherBMI(person1, person2)).to.equal(false);
});

it('Person1 is higher than person2', ()=> {
    person1 = {
        mass: 85,
        height: 1.76,
        name: "mark",
        bmi: calculateBMI(85, 1.76)
    }
    
    person2 = {
        mass: 95,
        height: 1.88,
        name: "john",
        bmi: calculateBMI(95, 1.88)
    }
    expect(higherBMI(person1, person2)).to.equal(true);
});
