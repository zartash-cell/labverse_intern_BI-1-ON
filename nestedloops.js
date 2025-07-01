// nested loops
// winning number 19
// 19 your guess is right
// 17 too low
// 20 too Highlight
// nested if else 
let winingnumber =19;
let  userguess= +prompt("Guess a number");

console.log(userguess);
if(userguess===winingnumber){
    console.log("your guess is right");
}
else{
    if(userguess< winingnumber){
    console.log("too low");
    }
else{
    console.log( "too high");
}
}