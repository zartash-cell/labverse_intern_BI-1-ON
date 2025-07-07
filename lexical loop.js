function lux(){
    const myvar="value1";
    // function declaration
    function myFun(){
        // now declare here myVar with diff value

        // js phle apne funct mein varaible chck karegi
        // agar usko ml gya to wo woe print karegi
        // agar usko na mila tou wo main function wale varaible ko print karegi
        // agar usko main se nikal kar bahar declare kare tou js phele main mein dekhe gi
        // then wo lexical environemnt mein check karegi
        // global scope jahan ye function ban ha
        // const myVar="value59"
        const myFun2=function(){
console.log("inside my func",myVar)
}
        
    }
    // function exression
const myFun2=function(){

}
// arrow function
let myFun3=()=>{

}
console.log(myvar);
console.log(myFun());
}
console.log (lux());