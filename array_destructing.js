// const myArray=[30,40];
// let myvalue1= myArray[0];
// let myvalue2= myArray[1];
// console.log( "1st value is",myvalue1);
// console.log("2nd value is",myvalue2);
// // another way of inserting values of array into variables seaprately
// and then they act as a normal variable jenki values hum chaneg kar sakhte  e.g myvalue1 values cam be changed
// let[myvalue1,myvalue2]=myArray;
// console.log( "1st value is",myvalue1);
// console.log( "1st value is",myvalue2);
// console.log( "1st value is",myvalue3); undefiend
// 2nd case we want  myvalue2 gives 50 that is 3rd value but he is illigebale to show by defaut 2nd value
const myArray=[30,40,50,60];
let[myvalue1, , myvalue2]=myArray;
myNewArray=myArray.slice(2);
// use comma and dont put any value in it and skip 
console.log( "1st value is",myvalue1);
console.log( "1st value is",myvalue2);
console.log(myNewArray);