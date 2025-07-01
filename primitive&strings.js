let a= null;
let b=345;
let c=true;
let d= BigInt("567")  + BigInt("3")
let e= "zeshii"
let f= Symbol("i am a nice symbol")
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof b);
// objects in js
const items={
    "Harry":true,
    "Shubh":false,
    "Lavish":67,
    "Rohan":undefined
}
console.log(items["Harry"])

// strings
let name ="zartash"
console.log(name);
let name2='zartash'
console.log(name2);
let name3 =`zartash`
console.log(name3);
// touppercase
console.log(name2.toUpperCase());
// lolower case
console.log(name3.toLowerCase());
// sice
console.log(name.slice(1,4))
// trim ...remove space
let friend="     amman   "
console.log(friend.trim())
// replace
console.log(name.replace("zar" ,"zes"))
// length
console.log(name.length);
// templATE literals ${}
let sentence =`${name} is bestfriend of ${friend}`
console.log(sentence);
// index
let name4="sufyan"
console.log(name4[3]);1