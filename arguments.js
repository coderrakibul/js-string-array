// parameter carai joto argument pass korbe sob guloke pawar jonno arguemnt use kora hoy

// function addNumbers(num1, num2){
//     // console.log(arguments);
//     let result = 0;
//     for(const num of arguments){
//         result = result + num;
//     }
//     return result;
// }
// const sum = addNumbers(23, 13, 50, 100, 420);
// console.log(sum);


// duita name jog korar jonno 
// function getFullName(firstName, secondName){
//     const fullName = firstName + " " + secondName;
//     return fullName;
// }
// const personName = getFullName("Hanif", "Sanket");
// console.log(personName);


// jodi parameter er odhik argument hoy
function getFullName(firstName, secondName){
    let fullName = "";
    for(const part of arguments){
        fullName = fullName + part + " ";
    }
    return fullName;
}
const personName = getFullName("Omuk", "Sanket", "Bin", "Hanif", "Sanket", "Bin", "Tomuk", "Sanket");
console.log(personName);

