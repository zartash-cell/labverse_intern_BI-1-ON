// objects
// arrays are good but not okay for real world DataTransfer
// objects store key value pairs 
// // objects dont have indexex
// const person={
//     name:"zaratsh",
//     age:20,
//     profession:"computer Scinece"
// };
// console.log(person);
// // how to accaess data in object
// console.log(person.age);

// const person={
// name:"zaratsh",
//     age:20,
//     profession:"computer Scinece",
//     hobbies:["guitar","listening",,"thinking"]
// };
// // console.log(person);
// // how to acces key pairs
// person.gender="female";
// console.log(person);
// objects destructuring
// const band={
//     bandName:"led zeppelin",
//     famousSong:"stairway to heaven",
//     year:2004,
//     anotherSong:"dooron dooron"
// };
// // const bandName=band.bandName;
// // const famousSong= band.famousSong;
// // console.log(bandName,famousSong);
// // using let instead of const can upadte the values
// // restprops for accessinf further items
// let {bandName,famousSong,...restProps}=band;
// console.log(restProps)
// bandName ="Bayyan";
// console.log(bandName)
// let {bandName:value1,famousSong:value2}=band;
// console.log(value1,value2)
// objects inside array $ nested destrucuting
const users=[
    {userID:1,firstName:"zartash",gender:"female"},
    {userID:2,firstName:"balaj",gender:"male"},
    {userID:3,firstName:"yushfa",gender:"female"}
]
// destrucure karne k liye curly braces lagao or usmein jesko desturcure karna ha usko likho 
// objects bare created inside the array and now destructed using varaible user1,user2,user3 and store them in another varaiable
const[{firstName :userID},, {gender}]=users;
// console.log(firstName);
console.log(gender);
console.log(userID);