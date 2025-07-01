// // arrays
// let fruits=["apple","banana","mango"];
// let numbers=[1,2,3,4]
// let mixed=["zeshi",1,2,3,4,null,undefined,true]
// console.log(mixed)
// fruits[2]="banana";
// console.log(typeof fruits)
// console.log(Array.isArray(fruits))
// // why this is checked/
// let obj={};
// console.log(Array.isArray(obj))
// array push pop
// let fruits=["apple","banana","mango"];
// console.log(fruits)
// push>>>.array mutable
// fruits.push("grapes")
// console.log(fruits)
// pop-----"remove the elements from the end"
// and return it to print and check
// let poppedFruit= fruits.pop();

// console.log(fruits)
// console.log("popped fruit is ",poppedFruit)

// unshift   to add at start

// fruits.unshift("mango")
// console.log(fruits)
// shift (remove from start) & returns back
// fruits.shift()
// console.log(fruits)

// let removalFruit=fruits.shift();
// console.log ( "removed fruit is ",removalFruit)
// console.log(fruits)
// push and pop are faster than shift and unshift

//  for loop in array
//  to seperatly print the items of array
// for (let i=0;i<9;i++){
//     console.log(i)
// }
// console.log(fruits.length)
// // console.log(fruits[fruits.length-1]) last value of array (total length -1)
// console.log(fruits[0])
let fruits=["apple","banana","mango"];
for( let i=0;i<fruits.length-1;i++){
    console.log(fruits[i]);
}