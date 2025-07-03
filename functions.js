// function add(){
//     console.log(2+4);
// }
// add();

// const { useDebugValue } = require("react");

// function add(){
//    return 2+4;
// }
// //  console.log (add());
// //  return koi value return nahi karta consol se usko print karwaya jata
// const newVar=add();
// console.log(newVar);
// values diff bhe ho sakhti now pass the arrgument 
// (REUSIBILITY)
// function addition(num1,num2){
//     return num1+num2;
// }
// // console.log(addition(5,3));
// // we can store the return value in another varaible and then print 
// const result= addition(4,7)
// console.log(result)
// // odd and even
// input mei num lega even or output mein btaya ga   even ha true or false

// function IsEven(num)
// {
// //     if(num%2===0)
// //         return true;
// //     else 
// //     return false;
// //
// return num%2===0;
// }
// console.log(IsEven(4));

// function  firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zartash"));
// input:array ,target (nnumber) ,output index of target if it id present in array
function targetFind(array,targNum){
 for( let i=0;i<array.length;i++)
 {
    if(array[i]===targNum){
        return i;
    }
return-1;
 }
}
const myArray=[1,3,,56,70]
const ans= targetFind(myArray,70);
console.log(ans);