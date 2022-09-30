// let counter
// console.log("for-loop")
// for (counter = 0; counter < 10; counter = counter + 1){
//     console.log("hello world", counter)
// }
// console.log("final", counter)

// let i = 0
// console.log("while-loop")
// while (i < 10){
//     console.log("hello world", i)
//     i++
// }
// console.log ("final", i)


// A simple program to solve the BMI problem


const weight = (prompt ("Enter your weight in kg"));
const height = (prompt ("Enter your height in meters"));

let BMI = weight/Math.pow(height, 2);

console.log(BMI);

switch (true){
    case (BMI < 18.5): console.log("Underweight");
    break;
    case (BMI >= 18.5 && BMI <= 24.9): console.log("Normal weight");
    break;
    case (BMI >= 25.0 && BMI <= 29.9): console.log("Pre-Obesity");
    break;
    case (BMI >= 30.0 && BMI <= 34.9): console.log("Obesity class 1");
    break;
    case (BMI >= 35.0 && BMI <= 39.9): console.log("Obesity class 2");
    break;
    default: console.log("Obesity class 3");
}


// let i = 0;


// while(i <= 10){
//     console.log(i);
//     i++;
// }
// console.log("final", i)