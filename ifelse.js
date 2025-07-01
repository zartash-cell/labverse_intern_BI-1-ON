// // if 
// // else if
// // else if
// // else if
// // else
 let tempInDegree;
 tempInDegree= +prompt("Please Enter Temperature");
 console.log(tempInDegree, typeof tempInDegree);
 if(tempInDegree<0){
    console.log("temp is extremmely cold");
 }
 else if(tempInDegree <16){
    console.log("temp is cold");
 }
 else if (tempInDegree<25){
    console.log("temp is okay");
 }
 else if(tempInDegree<35){
    console.log("lets go for swim");

 }
 else if(tempInDegree<45){
    console.log("lets on the AC");
 }
 else {
    console.log("too hot!");
 }
// let tempInDegree;
// tempInDegree =+prompt("Enter temperature");

// switch(tempInDegree){
//     case 1:
//     (tempInDegree>0);
//     console.log("it is too cold outside");
//     break;
//     case 2:
//     (tempInDegree>45);
//     console.log("it is too hot");
//     break;
//     default:
//         console.log("it is extrememe weather condition");
// }