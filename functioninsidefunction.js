// function inside function
const app=()=>{
    const myFun=()=>{
        console.log("hello world")
    }

    const add=( num1,num2)=>{
return num1+num2
    }

    const mul=( num1,num2)=>{
        return num1*num2;

    }
    console.log("inside app");
    console.log(add(3,5))
      console.log(mul(2,2));
}

//  console.log(app()); AGAR ESKO CALL NA KARE TOU KOI BHE
//  FUNCTION CALL NAHI HOGA ANDER WALE TAB HONGY JAB MAIN HOGA
//   console.log(add(3,4));
//    console.log(mul(2,2)); we cant run this outside only main function called outside