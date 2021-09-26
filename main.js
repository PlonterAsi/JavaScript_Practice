
let markBMI, johnBMI, markHigherBMI;
function challenge1() {
    const { calculateBMI, higherBMI } = require("./module/challenge1");
    
    let mark = {
        mass: 78,
        height: 1.69,
        name: "mark"
    }
    
    let john = {
        mass: 92,
        height: 1.95,
        name: "john"
    }
    
    console.log("TEST DATA 1")
    mark.bmi = calculateBMI(mark.mass, mark.height);
    john.bmi = calculateBMI(john.mass, john.height);
    markHigherBMI = higherBMI(mark, john);
    console.log(markHigherBMI)
    
    console.log("=======================")
    
    console.log("TEST DATA 2")
    mark = {
        mass: 95,
        height: 1.88,
        name: "mark"
    }
    
    john = {
        mass: 85,
        height: 1.76,
        name: "john"
    }
    mark.bmi = calculateBMI(mark.mass, mark.height);
    john.bmi = calculateBMI(john.mass, john.height);
    markHigherBMI = higherBMI(mark, john);
    console.log(markHigherBMI)
}

function challenge2(){
    
}
