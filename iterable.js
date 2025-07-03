// iterate
const person={
    name:"Zartash",
    age:20,
    "person hobbies":["guitar","sleeping","music"]
}

// for in loop
// for(let key in person){
//     console.log(key, person[key]);


// for(let key in person){
//     console.log(key,":" ,person[key])
// }


// // }
// // using tempelate string   we can acces tempelate string using backquotes and ${}
// for(let key in person){
//     console.log(`${key}:${person[key]}`)
// }
// objects.key(gives array)
// // console.log(Object.keys(person));
// const value=Array.isArray((Object.keys(person)))
// console.log(value);
// for of
for(let key of Object.keys(person)){
    console.log(person[key])
}