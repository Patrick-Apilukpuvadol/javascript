if (true){
    console.log("controlflow file loaded");

}

// if (0 || (0 $$ 1)){

/*

result1 = true && true
result2 = true && false
result3 = false || true
result4 = false || false

result5 - 0 && 1

*/

let shortcircuitExperiment = 0 ?? 2
console.log(shortcircuitExperiment);

let authResponse = null;
let errorResponse = {
    code: 401,
    message: "Auth went bad."

}

let someAuthExample = authResponse ?? errorResponse;
console.log(someAuthExample);
if (someAuthExample.code == 401){
    console.error("Login error occurred")
}

if (0 || false){
    console.log("controlflow short circuit condition")
} else{
    console.log("if was given a 'false so it didn't run");
}
let someValue = "true"

if (someValue){
    console.log("someValue has a message! It is: \n" + someValue);
}

// Equality checking
if (someValue == true){
    console.log("the someValue string equalled a true bollean value");

} else {
    console.log("the someValue string did not NOT equal a true boolean value");
}

/*
syntax for our if
if someValue
    print("tada")

if (someValue) {
    console.log("tada!"")
}
*/

let choice = prompt("What is your favourite colour?")
switch (choice) {
    case "blue":
        alert("No way..Thats the colour of the sky!!");
        break;
    case "green":
        alert("Thats not very creative.");
        break;
    case "red":
        alert("Thats a speedy colour");
        break;
    default:
        alert("...that doesn't seem like a cool colour");
        break;
}

let ternaryResult = true ? console.log("true is truthy") : console.log("It was falsy");

let ifElseResult = null;
if (true){
    ifElseResult = consol.log("true is truthy");
} else {
    ifElseResult = console.log("it was falsy");
}